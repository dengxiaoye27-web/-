// 货柜装柜量计算核心逻辑

// 标准货柜内尺寸(厘米)与限重(千克)参考值,实际以船公司/箱况为准
const CONTAINER_PRESETS = {
  '20GP': { name: '20GP 标准柜', length: 589, width: 235, height: 239, maxPayload: 28200 },
  '40GP': { name: '40GP 标准柜', length: 1203, width: 235, height: 239, maxPayload: 26700 },
  '40HQ': { name: '40HQ 高柜', length: 1203, width: 235, height: 269, maxPayload: 28600 },
  '45HQ': { name: '45HQ 高柜', length: 1355, width: 234, height: 269, maxPayload: 28000 },
};

// 返回三边长度的 6 种朝向排列
function permutations(dims) {
  const [a, b, c] = dims;
  return [
    [a, b, c], [a, c, b],
    [b, a, c], [b, c, a],
    [c, a, b], [c, b, a],
  ];
}

/**
 * @param {object} box 包装尺寸 { length, width, height, weight } 单位 cm / kg
 * @param {object} container 货柜内尺寸 { length, width, height, maxPayload }
 */
function calculate(box, container) {
  const boxDims = [box.length, box.width, box.height];
  const boxVolume = box.length * box.width * box.height;
  const containerVolume = container.length * container.width * container.height;

  const orientations = permutations(boxDims).map(([a, b, c]) => {
    const nx = Math.floor(container.length / a);
    const ny = Math.floor(container.width / b);
    const nz = Math.floor(container.height / c);
    return { arrangement: [a, b, c], counts: [nx, ny, nz], count: nx * ny * nz };
  });

  // 按数量去重排序,取最优摆放方式
  orientations.sort((x, y) => y.count - x.count);
  const best = orientations[0];

  const theoreticalMax = boxVolume > 0 ? Math.floor(containerVolume / boxVolume) : 0;
  const spaceLimitedQty = best.count;
  const hasWeight = box.weight > 0;
  const weightLimitedQty = hasWeight ? Math.floor(container.maxPayload / box.weight) : Infinity;
  const finalQty = Math.min(spaceLimitedQty, weightLimitedQty);
  const limitingFactor = weightLimitedQty < spaceLimitedQty ? 'weight' : 'space';

  const volumeUtilization = containerVolume > 0 ? (finalQty * boxVolume) / containerVolume : 0;
  const weightUtilization = hasWeight ? (finalQty * box.weight) / container.maxPayload : null;

  return {
    best,
    theoreticalMax,
    spaceLimitedQty,
    weightLimitedQty: hasWeight ? weightLimitedQty : null,
    finalQty,
    limitingFactor,
    volumeUtilization,
    weightUtilization,
  };
}

// 在给定的可用长度(availLength)x 货柜宽 x 货柜高内,枚举该规格的可行朝向
function orientationsFor(dims, availLength, width, height) {
  return permutations(dims)
    .map(([a, b, c]) => {
      const nx = Math.floor(availLength / a);
      const ny = Math.floor(width / b);
      const nz = Math.floor(height / c);
      return { arrangement: [a, b, c], rowLength: a, nx, perRow: ny * nz, maxFit: nx * ny * nz };
    })
    .filter((o) => o.nx > 0 && o.perRow > 0);
}

// 按列表顺序,沿货柜长度方向依次为每个规格划出一段区域装载(先到先装),
// 模拟单个货柜的装载情况
function packOneContainer(items, container) {
  let remainingLength = container.length;
  let totalWeight = 0;
  let totalVolume = 0;

  const breakdown = items.map((item) => {
    const volume = item.length * item.width * item.height;
    if (remainingLength <= 0 || item.qty <= 0) {
      return { label: item.label, requestedQty: item.qty, placedQty: 0, arrangement: null, lengthUsed: 0, volume };
    }

    const options = orientationsFor([item.length, item.width, item.height], remainingLength, container.width, container.height);
    let chosen = null;
    options.forEach((o) => {
      const rowsNeeded = Math.ceil(item.qty / o.perRow);
      const rowsUsed = Math.min(rowsNeeded, o.nx);
      const placedThis = Math.min(item.qty, rowsUsed * o.perRow);
      const lengthUsedThis = rowsUsed * o.rowLength;
      if (!chosen || placedThis > chosen.placedThis ||
          (placedThis === chosen.placedThis && lengthUsedThis < chosen.lengthUsedThis)) {
        chosen = { arrangement: o.arrangement, placedThis, lengthUsedThis };
      }
    });

    const placedQty = chosen ? chosen.placedThis : 0;
    const lengthUsed = chosen ? chosen.lengthUsedThis : 0;
    remainingLength -= lengthUsed;
    totalWeight += placedQty * (item.weight || 0);
    totalVolume += placedQty * volume;

    return {
      label: item.label,
      requestedQty: item.qty,
      placedQty,
      arrangement: chosen ? chosen.arrangement : null,
      lengthUsed,
      volume,
    };
  });

  return { breakdown, totalWeight, totalVolume, remainingLength };
}

const MAX_CONTAINERS = 200; // 安全上限,避免数量输入异常导致死循环

/**
 * 多规格混装计算:已知每种规格的固定数量,估算需要几个货柜、每柜怎么装
 * @param {Array} items [{ label, length, width, height, weight, qty }]
 * @param {object} container 货柜内尺寸 { length, width, height, maxPayload }
 */
function calculateMixed(items, container) {
  const containerVolume = container.length * container.width * container.height;

  const impossibleItems = items
    .filter((item) => orientationsFor([item.length, item.width, item.height], container.length, container.width, container.height).length === 0)
    .map((item) => item.label);

  if (impossibleItems.length > 0) {
    return { error: 'TOO_LARGE', impossibleItems };
  }

  let remaining = items.map((it) => ({ ...it }));
  const containers = [];
  let guard = 0;

  while (remaining.some((it) => it.qty > 0) && guard < MAX_CONTAINERS) {
    guard += 1;
    const result = packOneContainer(remaining, container);
    containers.push(result);
    remaining = remaining.map((it, idx) => ({ ...it, qty: it.qty - result.breakdown[idx].placedQty }));
    const placedAny = result.breakdown.some((b) => b.placedQty > 0);
    if (!placedAny) break; // 理论上不会发生(已排除放不下的规格),防御性退出
  }

  const totalRequestedQty = items.reduce((s, it) => s + it.qty, 0);
  const totalPlacedQty = containers.reduce((s, c) => s + c.breakdown.reduce((ss, b) => ss + b.placedQty, 0), 0);
  const totalWeight = containers.reduce((s, c) => s + c.totalWeight, 0);
  const totalVolume = containers.reduce((s, c) => s + c.totalVolume, 0);
  const overWeightContainers = containers.filter((c) => isFinite(container.maxPayload) && c.totalWeight > container.maxPayload).length;

  return {
    containersNeeded: containers.length,
    containers,
    totalRequestedQty,
    totalPlacedQty,
    fullyPlaced: totalPlacedQty >= totalRequestedQty,
    truncated: guard >= MAX_CONTAINERS && totalPlacedQty < totalRequestedQty,
    totalWeight,
    totalVolume,
    containerVolume,
    avgVolumeUtilization: containers.length > 0 ? totalVolume / (containerVolume * containers.length) : 0,
    overWeightContainers,
  };
}

module.exports = { CONTAINER_PRESETS, calculate, calculateMixed };
