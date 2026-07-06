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

module.exports = { CONTAINER_PRESETS, calculate };
