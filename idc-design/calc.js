// IDC 机房设计方案核心计算逻辑
// 说明：以下均为行业通用经验值/简化工程算法，用于快速出具方案参考，
// 正式交付前应由专业工程师复核（尤其是电力、制冷、承重相关的强制性/安全性指标）。

const KW_PER_RT = 3.517; // 1 冷吨(RT) = 3.517 kW

// Uptime Institute Tier 等级参考（可用性、默认冗余建议）
const TIER_INFO = {
  T1: { name: 'Tier I（基础型）', availability: '99.671%', defaultRedundancy: 'N' },
  T2: { name: 'Tier II（冗余组件型）', availability: '99.741%', defaultRedundancy: 'N+1' },
  T3: { name: 'Tier III（可并行维护型）', availability: '99.982%', defaultRedundancy: 'N+1' },
  T4: { name: 'Tier IV（容错型）', availability: '99.995%', defaultRedundancy: '2N' },
};

// 制冷方式 -> 默认 PUE 参考值
const COOLING_PUE_DEFAULTS = {
  CRAC_DX: 1.6, // 风冷精密空调（直膨式）
  CRAH_CHILLED: 1.4, // 冷冻水精密空调
  IN_ROW: 1.35, // 列间空调
  LIQUID: 1.15, // 液冷（冷板式/浸没式）
};

// 冗余等级 -> 模块数量倍数逻辑
function redundantModuleCount(baseModules, redundancy) {
  switch (redundancy) {
    case 'N':
      return baseModules;
    case 'N+1':
      return baseModules + 1;
    case '2N':
      return baseModules * 2;
    case '2N+1':
      return baseModules * 2 + 1;
    default:
      return baseModules;
  }
}

/**
 * @param {object} input
 *  scaleMode: 'byRackCount' | 'byArea'
 *  rackCount, roomArea, areaPerRack, floorLoadCapacity, rackWeight
 *  powerDensityPerRack
 *  coolingType, targetTemp, targetPUE (可覆盖默认), cracUnitCapacity, auxHeatFactor
 *  tier, powerRedundancy, coolingRedundancy, upsBackupMinutes
 *  upsModuleCapacityKva, upsLoadFactor, powerFactor
 *  budget (可选, USD)
 *  unitPrices { rack, pdu, upsModule, upsBattery, coolingUnit, cabling, dcim, fireSuppression, installFactor }
 */
function generatePlan(input) {
  const areaPerRack = input.areaPerRack > 0 ? input.areaPerRack : 3.0;
  const rackWeight = input.rackWeight > 0 ? input.rackWeight : 800;
  const floorLoadCapacity = input.floorLoadCapacity > 0 ? input.floorLoadCapacity : 750;

  let rackCount;
  let roomArea;
  if (input.scaleMode === 'byArea') {
    roomArea = input.roomArea;
    rackCount = Math.floor(roomArea / areaPerRack);
  } else {
    rackCount = input.rackCount;
    roomArea = rackCount * areaPerRack;
  }

  const powerDensityPerRack = input.powerDensityPerRack > 0 ? input.powerDensityPerRack : 6;
  const itLoadKw = rackCount * powerDensityPerRack;

  const targetPUE = input.targetPUE > 0 ? input.targetPUE : (COOLING_PUE_DEFAULTS[input.coolingType] || 1.5);
  const facilityLoadKw = itLoadKw * targetPUE;
  const recommendedUtilityKw = facilityLoadKw / 0.9; // 预留功率因数与裕量

  // ---- 电力（UPS）----
  const upsLoadFactor = input.upsLoadFactor > 0 ? input.upsLoadFactor : 0.8; // 建议 UPS 满载运行不超过 80%
  const powerFactor = input.powerFactor > 0 ? input.powerFactor : 0.9;
  const upsModuleKva = input.upsModuleCapacityKva > 0 ? input.upsModuleCapacityKva : 200;

  const requiredUpsKw = itLoadKw / upsLoadFactor;
  const requiredUpsKva = requiredUpsKw / powerFactor;
  const upsBaseModules = Math.max(1, Math.ceil(requiredUpsKva / upsModuleKva));
  const powerRedundancy = input.powerRedundancy || TIER_INFO[input.tier]?.defaultRedundancy || 'N+1';
  const upsModules = redundantModuleCount(upsBaseModules, powerRedundancy);
  const installedUpsKva = upsModules * upsModuleKva;

  // ---- 制冷 ----
  const auxHeatFactor = input.auxHeatFactor >= 0 ? input.auxHeatFactor : 0.05; // 照明/人员等非 IT 辅助热负荷
  const coolingLoadKw = itLoadKw * (1 + auxHeatFactor);
  const coolingLoadRT = coolingLoadKw / KW_PER_RT; // 不含冗余的工程负载，用于与 coolingLoadKw 对照
  const cracUnitKw = input.cracUnitCapacity > 0 ? input.cracUnitCapacity : 50;
  const cracBaseUnits = Math.max(1, Math.ceil(coolingLoadKw / cracUnitKw));
  const coolingRedundancy = input.coolingRedundancy || TIER_INFO[input.tier]?.defaultRedundancy || 'N+1';
  const cracUnits = redundantModuleCount(cracBaseUnits, coolingRedundancy);
  const installedCoolingKw = cracUnits * cracUnitKw;
  const installedCoolingRT = installedCoolingKw / KW_PER_RT; // 含冗余的装机容量，与 installedCoolingKw 同口径

  // ---- 承重校验 ----
  const totalRackWeightKg = rackCount * rackWeight;
  const loadPerM2 = roomArea > 0 ? totalRackWeightKg / roomArea : 0;
  const floorLoadOk = loadPerM2 <= floorLoadCapacity;

  // ---- PDU 数量（双路 A/B 供电取决于冗余是否 >= N+1）----
  const pduPerRack = powerRedundancy === 'N' ? 1 : 2;
  const pduCount = rackCount * pduPerRack;

  // ---- 报价 BOM ----
  const prices = Object.assign(
    {
      rack: 800,
      pdu: 180,
      upsModule: 45000,
      upsBattery: 8000,
      coolingUnit: input.coolingType === 'LIQUID' ? 25000 : 12000,
      cabling: 500,
      dcim: 15000,
      fireSuppression: 80,
      installFactor: 0.15,
    },
    input.unitPrices || {},
  );

  const backupMinutes = input.upsBackupMinutes > 0 ? input.upsBackupMinutes : 10;
  const batteryPriceFactor = Math.max(1, backupMinutes / 10);

  const bomItems = [
    { key: 'rack', label: '标准机柜（42U）', qty: rackCount, unit: '台', unitPrice: prices.rack },
    { key: 'pdu', label: '智能 PDU', qty: pduCount, unit: '条', unitPrice: prices.pdu },
    { key: 'upsModule', label: `UPS 模块（${upsModuleKva}kVA/台）`, qty: upsModules, unit: '台', unitPrice: prices.upsModule },
    { key: 'upsBattery', label: `UPS 电池组（约${backupMinutes}分钟后备）`, qty: upsModules, unit: '组', unitPrice: Math.round(prices.upsBattery * batteryPriceFactor) },
    { key: 'coolingUnit', label: coolingLabel(input.coolingType, cracUnitKw), qty: cracUnits, unit: '台', unitPrice: prices.coolingUnit },
    { key: 'cabling', label: '综合布线与网络配套', qty: rackCount, unit: '柜', unitPrice: prices.cabling },
    { key: 'dcim', label: '动环监控系统（DCIM）', qty: 1, unit: '套', unitPrice: prices.dcim },
    { key: 'fireSuppression', label: '气体消防灭火系统', qty: Math.ceil(roomArea), unit: 'm²', unitPrice: prices.fireSuppression },
  ];

  bomItems.forEach((item) => {
    item.subtotal = item.qty * item.unitPrice;
  });
  const equipmentSubtotal = bomItems.reduce((s, item) => s + item.subtotal, 0);
  const installCost = equipmentSubtotal * prices.installFactor;
  const totalCost = equipmentSubtotal + installCost;

  const budget = input.budget > 0 ? input.budget : null;
  const overBudget = budget !== null && totalCost > budget;
  const budgetDiffPct = budget !== null ? ((totalCost - budget) / budget) * 100 : null;

  return {
    rackCount,
    roomArea,
    areaPerRack,
    itLoadKw,
    powerDensityPerRack,
    targetPUE,
    facilityLoadKw,
    recommendedUtilityKw,
    upsModuleKva,
    upsBaseModules,
    powerRedundancy,
    upsModules,
    installedUpsKva,
    coolingLoadKw,
    coolingLoadRT,
    cracUnitKw,
    cracBaseUnits,
    coolingRedundancy,
    cracUnits,
    installedCoolingKw,
    installedCoolingRT,
    totalRackWeightKg,
    loadPerM2,
    floorLoadCapacity,
    floorLoadOk,
    pduCount,
    bomItems,
    equipmentSubtotal,
    installCost,
    installFactor: prices.installFactor,
    totalCost,
    budget,
    overBudget,
    budgetDiffPct,
    tierInfo: TIER_INFO[input.tier] || null,
  };
}

function coolingLabel(coolingType, unitKw) {
  const names = {
    CRAC_DX: `风冷精密空调（${unitKw}kW/台）`,
    CRAH_CHILLED: `冷冻水精密空调（${unitKw}kW/台）`,
    IN_ROW: `列间空调（${unitKw}kW/台）`,
    LIQUID: `液冷 CDU 单元（${unitKw}kW/台）`,
  };
  return names[coolingType] || `精密空调（${unitKw}kW/台）`;
}

const IdcCalc = { TIER_INFO, COOLING_PUE_DEFAULTS, KW_PER_RT, generatePlan };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = IdcCalc;
} else if (typeof window !== 'undefined') {
  window.IdcCalc = IdcCalc;
}
