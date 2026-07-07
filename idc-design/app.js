(function () {
  const { TIER_INFO, COOLING_PUE_DEFAULTS, KW_PER_RT, generatePlan } = window.IdcCalc;

  function $(id) {
    return document.getElementById(id);
  }

  function fmt(n, digits) {
    if (n === null || n === undefined || !isFinite(n)) return '-';
    return n.toLocaleString('en-US', { minimumFractionDigits: digits || 0, maximumFractionDigits: digits || 0 });
  }

  let toastTimer = null;
  function showToast(message) {
    const el = $('toast');
    el.textContent = message;
    el.classList.remove('hidden');
    el.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.style.opacity = '0';
      setTimeout(() => el.classList.add('hidden'), 200);
    }, 1800);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => showToast('已复制到剪贴板'),
        () => fallbackCopy(text),
      );
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast('已复制到剪贴板');
    } catch (e) {
      showToast('复制失败，请手动选择文本');
    }
    document.body.removeChild(ta);
  }

  // ---------- 表单联动 ----------
  document.querySelectorAll('input[name="scale-mode"]').forEach((r) => {
    r.addEventListener('change', (e) => {
      const byArea = e.target.value === 'byArea';
      $('field-rackCount').classList.toggle('hidden', byArea);
      $('field-roomArea').classList.toggle('hidden', !byArea);
    });
  });

  document.querySelectorAll('input[name="density-preset"]').forEach((r) => {
    r.addEventListener('change', (e) => {
      if (e.target.value !== 'custom') {
        $('b-powerDensity').value = e.target.value;
      }
    });
  });
  $('b-powerDensity').addEventListener('input', () => {
    const customRadio = document.querySelector('input[name="density-preset"][value="custom"]');
    const matched = Array.from(document.querySelectorAll('input[name="density-preset"]')).find(
      (r) => r.value !== 'custom' && parseFloat(r.value) === parseFloat($('b-powerDensity').value),
    );
    if (matched) matched.checked = true;
    else customRadio.checked = true;
  });

  document.querySelectorAll('input[name="cooling-type"]').forEach((r) => {
    r.addEventListener('change', (e) => {
      const pue = COOLING_PUE_DEFAULTS[e.target.value];
      if (pue) $('c-targetPue').value = pue;
      if (e.target.value === 'LIQUID') $('c-cracUnitKw').value = 100;
      else $('c-cracUnitKw').value = 50;
    });
  });

  const TIER_REDUNDANCY_HINT = {
    T1: 'Tier I 典型可用性 99.671%，通常无冗余（N），适合预算优先、可接受计划性停机的场景。',
    T2: 'Tier II 典型可用性 99.741%，建议关键部件 N+1 冗余。',
    T3: 'Tier III 典型可用性 99.982%，建议电力与制冷均为 N+1，支持在线维护不中断业务。',
    T4: 'Tier IV 典型可用性 99.995%，建议电力与制冷均为 2N，具备容错能力。',
  };

  $('d-tier').addEventListener('change', (e) => {
    const tier = TIER_INFO[e.target.value];
    $('tier-hint').textContent = TIER_REDUNDANCY_HINT[e.target.value] || '';
    if (tier) {
      $('d-powerRedundancy').value = tier.defaultRedundancy;
      $('d-coolingRedundancy').value = tier.defaultRedundancy;
    }
  });
  $('d-tier').dispatchEvent(new Event('change'));

  $('toggle-prices').addEventListener('click', () => {
    const el = $('price-fields');
    const nowHidden = el.classList.toggle('hidden');
    $('toggle-prices').textContent = nowHidden ? '展开 ▾' : '收起 ▴';
  });

  $('p-date').valueAsDate = new Date();

  // ---------- 收集输入 ----------
  function collectInput() {
    const scaleMode = document.querySelector('input[name="scale-mode"]:checked').value;
    const coolingType = document.querySelector('input[name="cooling-type"]:checked').value;

    return {
      scaleMode,
      rackCount: parseFloat($('a-rackCount').value) || 0,
      roomArea: parseFloat($('a-roomArea').value) || 0,
      areaPerRack: parseFloat($('a-areaPerRack').value) || 3.0,
      rackWeight: parseFloat($('a-rackWeight').value) || 800,
      floorLoadCapacity: parseFloat($('a-floorLoad').value) || 750,
      powerDensityPerRack: parseFloat($('b-powerDensity').value) || 6,
      coolingType,
      targetTemp: parseFloat($('c-targetTemp').value) || 24,
      targetPUE: parseFloat($('c-targetPue').value) || COOLING_PUE_DEFAULTS[coolingType],
      cracUnitCapacity: parseFloat($('c-cracUnitKw').value) || 50,
      tier: $('d-tier').value,
      powerRedundancy: $('d-powerRedundancy').value,
      coolingRedundancy: $('d-coolingRedundancy').value,
      upsBackupMinutes: parseFloat($('d-backupMinutes').value) || 10,
      budget: parseFloat($('d-budget').value) || 0,
      unitPrices: {
        rack: parseFloat($('price-rack').value) || 0,
        pdu: parseFloat($('price-pdu').value) || 0,
        upsModuleCapacityKva: parseFloat($('price-upsModuleKva').value) || 200,
        upsModule: parseFloat($('price-upsModule').value) || 0,
        upsBattery: parseFloat($('price-upsBattery').value) || 0,
        coolingUnit: parseFloat($('price-coolingUnit').value) || 0,
        cabling: parseFloat($('price-cabling').value) || 0,
        dcim: parseFloat($('price-dcim').value) || 0,
        fireSuppression: parseFloat($('price-fireSuppression').value) || 0,
        installFactor: (parseFloat($('price-installFactor').value) || 15) / 100,
      },
      upsModuleCapacityKva: parseFloat($('price-upsModuleKva').value) || 200,
    };
  }

  let currentPlan = null;

  $('generate-btn').addEventListener('click', () => {
    const input = collectInput();
    if (input.scaleMode === 'byRackCount' && input.rackCount <= 0) {
      showToast('请输入机柜数量');
      return;
    }
    if (input.scaleMode === 'byArea' && input.roomArea <= 0) {
      showToast('请输入机房面积');
      return;
    }

    currentPlan = generatePlan(input);
    renderProposal(currentPlan);
    $('proposal').classList.remove('hidden');
    $('proposal').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  function renderProposal(plan) {
    const client = $('p-client').value.trim();
    const project = $('p-project').value.trim();
    const date = $('p-date').value;

    $('out-title').textContent = project ? `${project} — 数据中心机房设计方案` : '数据中心机房设计方案';
    $('out-meta').textContent = [client ? `客户：${client}` : null, date ? `日期：${date}` : null, `等级：${plan.tierInfo ? plan.tierInfo.name : '-'}`]
      .filter(Boolean)
      .join('　|　');

    renderDashboard(plan);
    renderCalcTable(plan);
    renderBomTable(plan);
    drawLayout(plan);
    renderCostSummary(plan);
  }

  function renderDashboard(plan) {
    const tiles = [
      { label: '机柜数量', value: `${fmt(plan.rackCount)} 台` },
      { label: '机房面积', value: `${fmt(plan.roomArea, 1)} m²` },
      { label: '总 IT 负载', value: `${fmt(plan.itLoadKw, 1)} kW` },
      { label: '设施总负载（含PUE）', value: `${fmt(plan.facilityLoadKw, 1)} kW` },
      { label: 'UPS 建议容量', value: `${fmt(plan.installedUpsKva)} kVA（${plan.upsModules} 台）` },
      { label: '制冷建议容量', value: `${fmt(plan.installedCoolingKw)} kW / ${fmt(plan.installedCoolingRT, 1)} RT（${plan.cracUnits} 台）` },
      {
        label: '楼板承重校验',
        value: plan.floorLoadOk ? '通过' : '超限，需加固',
        status: plan.floorLoadOk ? 'good' : 'bad',
      },
      { label: '预估总价', value: `$${fmt(plan.totalCost)}`, status: plan.overBudget ? 'bad' : plan.budget ? 'good' : '' },
    ];

    $('dashboard').innerHTML = tiles
      .map(
        (t) => `
      <div class="dash-tile${t.status ? ` status-${t.status}` : ''}">
        <div class="dash-value">${t.value}</div>
        <div class="dash-label">${t.label}</div>
      </div>`,
      )
      .join('');
  }

  function renderCalcTable(plan) {
    const rows = [
      ['单柜平均功率密度', `${fmt(plan.powerDensityPerRack, 1)} kW/柜`],
      ['单柜占用面积', `${fmt(plan.areaPerRack, 1)} m²/柜`],
      ['目标 PUE', fmt(plan.targetPUE, 2)],
      ['建议市电/变压器容量', `${fmt(plan.recommendedUtilityKw)} kW`],
      ['电力冗余等级', plan.powerRedundancy],
      ['UPS 需求容量（含负载与功率因数裕量）', `${fmt(plan.upsModules * plan.upsModuleKva)} kVA`],
      ['制冷冗余等级', plan.coolingRedundancy],
      ['制冷负载（含辅助热负荷）', `${fmt(plan.coolingLoadKw, 1)} kW`],
      ['机柜总重量', `${fmt(plan.totalRackWeightKg)} kg`],
      ['楼板荷载', `${fmt(plan.loadPerM2, 1)} kg/m²（承重上限 ${fmt(plan.floorLoadCapacity)} kg/m²）`],
      ['PDU 数量', `${fmt(plan.pduCount)} 条`],
      ['对应可用性等级', plan.tierInfo ? `${plan.tierInfo.name} · ${plan.tierInfo.availability}` : '-'],
    ];
    $('calc-table').innerHTML = rows.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('');
  }

  function renderBomTable(plan) {
    const tbody = $('bom-tbody');
    tbody.innerHTML = plan.bomItems
      .map(
        (item, idx) => `
      <tr data-idx="${idx}">
        <td>${item.label}</td>
        <td class="num">${fmt(item.qty)}</td>
        <td>${item.unit}</td>
        <td class="num price-cell"><input type="number" min="0" class="bom-price-input" data-idx="${idx}" value="${item.unitPrice}" /></td>
        <td class="num bom-subtotal" data-idx="${idx}">$${fmt(item.subtotal)}</td>
      </tr>`,
      )
      .join('');

    tbody.querySelectorAll('.bom-price-input').forEach((input) => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx, 10);
        const item = currentPlan.bomItems[idx];
        item.unitPrice = parseFloat(e.target.value) || 0;
        item.subtotal = item.qty * item.unitPrice;
        document.querySelector(`.bom-subtotal[data-idx="${idx}"]`).textContent = `$${fmt(item.subtotal)}`;
        recomputeTotals();
      });
    });

    renderBomFoot(plan);
  }

  function renderBomFoot(plan) {
    $('bom-tfoot').innerHTML = `
      <tr><td colspan="4">设备小计</td><td class="num">$${fmt(plan.equipmentSubtotal)}</td></tr>
      <tr><td colspan="4">安装工程费（${fmt(plan.installFactor * 100, 0)}%）</td><td class="num">$${fmt(plan.installCost)}</td></tr>
      <tr><td colspan="4">总计</td><td class="num">$${fmt(plan.totalCost)}</td></tr>
    `;
  }

  function recomputeTotals() {
    const plan = currentPlan;
    plan.equipmentSubtotal = plan.bomItems.reduce((s, item) => s + item.subtotal, 0);
    plan.installCost = plan.equipmentSubtotal * plan.installFactor;
    plan.totalCost = plan.equipmentSubtotal + plan.installCost;
    plan.overBudget = plan.budget !== null && plan.totalCost > plan.budget;
    plan.budgetDiffPct = plan.budget !== null ? ((plan.totalCost - plan.budget) / plan.budget) * 100 : null;
    renderBomFoot(plan);
    renderCostSummary(plan);
    renderDashboard(plan);
  }

  function renderCostSummary(plan) {
    const tiles = [
      { label: '设备小计', value: `$${fmt(plan.equipmentSubtotal)}` },
      { label: '安装工程费', value: `$${fmt(plan.installCost)}` },
      { label: '预估总价', value: `$${fmt(plan.totalCost)}` },
    ];
    if (plan.budget) {
      tiles.push({
        label: plan.overBudget ? `超出预算 ${fmt(plan.budgetDiffPct, 1)}%` : `低于预算 ${fmt(-plan.budgetDiffPct, 1)}%`,
        value: `$${fmt(plan.budget)}（客户预算）`,
        status: plan.overBudget ? 'bad' : '',
      });
    }
    $('cost-summary').innerHTML = tiles
      .map(
        (t) => `
      <div class="cost-tile${t.status ? ` status-${t.status}` : ''}">
        <div class="cost-value">${t.value}</div>
        <div class="cost-label">${t.label}</div>
      </div>`,
      )
      .join('');
  }

  // ---------- 机房布局示意（Canvas）----------
  function drawLayout(plan) {
    const canvas = $('layout-canvas');
    const cssWidth = 820;
    const racksPerRow = Math.min(12, Math.max(4, Math.round(Math.sqrt(plan.rackCount * 2.2))));
    const totalRows = Math.max(1, Math.ceil(plan.rackCount / racksPerRow));
    const rackW = 26;
    const rackGap = 4;
    const aisleH = 34;
    const rowH = 20;
    const marginX = 60;
    const marginTop = 50;
    const marginBottom = 40;
    const numAisles = totalRows - 1;

    const cssHeight = marginTop + totalRows * rowH + numAisles * aisleH + marginBottom;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    canvas.style.width = '100%';
    canvas.style.height = `${cssHeight}px`;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // 示意图固定使用浅色纸面配色，不随页面深色/浅色主题变化——
    // 一是 canvas 是一次性栅格化的快照，主题切换后不会自动重绘；
    // 二是这张图会被打印和导出成图片，保持与纸面/PNG 输出一致的观感。
    const textColor = '#182430';
    const surfaceAlt = '#eef1f4';
    const coldColor = 'rgba(13, 110, 253, 0.12)';
    const hotColor = 'rgba(196, 69, 63, 0.12)';
    const rackColor = '#0d6efd';
    const cracColor = '#0e8f6f';
    const rowWidth = racksPerRow * (rackW + rackGap);

    ctx.fillStyle = surfaceAlt;
    ctx.fillRect(0, 0, cssWidth, cssHeight);

    ctx.fillStyle = textColor;
    ctx.font = '13px sans-serif';
    ctx.fillText(`机柜排布示意（共 ${plan.rackCount} 台，每行约 ${racksPerRow} 台，含 ${plan.cracUnits} 台制冷设备）`, marginX, 24);

    let y = marginTop;
    let racksLeft = plan.rackCount;

    for (let row = 0; row < totalRows; row += 1) {
      const drawn = drawRackRow(ctx, marginX, y, racksPerRow, rackW, rowH, rackGap, rackColor, racksLeft);
      racksLeft -= drawn;
      y += rowH;

      if (row < totalRows - 1) {
        // 行对之间交替为冷通道（面对面）与热通道（背对背）
        const isCold = row % 2 === 0;
        ctx.fillStyle = isCold ? coldColor : hotColor;
        ctx.fillRect(marginX, y, rowWidth, aisleH);
        ctx.fillStyle = textColor;
        ctx.font = '10px sans-serif';
        ctx.fillText(isCold ? '冷通道' : '热通道', marginX + rowWidth / 2 - 16, y + aisleH / 2 + 3);
        y += aisleH;
      }
    }

    // 制冷设备放置在机房一侧
    const cracToShow = Math.min(plan.cracUnits, Math.ceil((cssHeight - marginTop - marginBottom) / 22));
    ctx.fillStyle = cracColor;
    for (let i = 0; i < cracToShow; i += 1) {
      const cx = marginX - 34;
      const cy = marginTop + i * 22;
      if (cy < cssHeight - marginBottom) {
        ctx.fillRect(cx, cy, 20, 16);
      }
    }
    ctx.fillStyle = textColor;
    ctx.font = '10px sans-serif';
    ctx.save();
    ctx.translate(marginX - 44, marginTop + 40);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('制冷设备', 0, 0);
    ctx.restore();
  }

  function drawRackRow(ctx, startX, y, racksPerRow, rackW, rowH, rackGap, color, racksLeft) {
    let drawn = 0;
    for (let i = 0; i < racksPerRow; i += 1) {
      if (drawn >= racksLeft) break;
      const x = startX + i * (rackW + rackGap);
      ctx.fillStyle = color;
      ctx.fillRect(x, y, rackW, rowH);
      drawn += 1;
    }
    return drawn;
  }

  // ---------- 导出/分享 ----------
  function buildTextSummary(plan) {
    const client = $('p-client').value.trim();
    const project = $('p-project').value.trim();
    const lines = [];
    lines.push(`【${project || '数据中心机房'}设计方案】`);
    if (client) lines.push(`客户：${client}`);
    lines.push(`等级：${plan.tierInfo ? plan.tierInfo.name : '-'}（${plan.tierInfo ? plan.tierInfo.availability : '-'}）`);
    lines.push('');
    lines.push('方案总览：');
    lines.push(`  机柜数量：${fmt(plan.rackCount)} 台，机房面积：${fmt(plan.roomArea, 1)} m²`);
    lines.push(`  总 IT 负载：${fmt(plan.itLoadKw, 1)} kW，设施总负载：${fmt(plan.facilityLoadKw, 1)} kW（PUE ${fmt(plan.targetPUE, 2)}）`);
    lines.push(`  UPS：${plan.upsModules} 台 × ${plan.upsModuleKva}kVA（${plan.powerRedundancy}），制冷：${plan.cracUnits} 台 × ${plan.cracUnitKw}kW（${plan.coolingRedundancy}）`);
    lines.push(`  楼板承重校验：${plan.floorLoadOk ? '通过' : '超限，需加固'}（${fmt(plan.loadPerM2, 1)} / ${fmt(plan.floorLoadCapacity)} kg/m²）`);
    lines.push('');
    lines.push('设备清单：');
    plan.bomItems.forEach((item) => {
      lines.push(`  ${item.label} × ${fmt(item.qty)}${item.unit} @ $${fmt(item.unitPrice)} = $${fmt(item.subtotal)}`);
    });
    lines.push('');
    lines.push(`设备小计：$${fmt(plan.equipmentSubtotal)}`);
    lines.push(`安装工程费：$${fmt(plan.installCost)}`);
    lines.push(`预估总价：$${fmt(plan.totalCost)}`);
    if (plan.budget) {
      lines.push(`客户预算：$${fmt(plan.budget)}（${plan.overBudget ? '超出' : '低于'} ${fmt(Math.abs(plan.budgetDiffPct), 1)}%）`);
    }
    lines.push('');
    lines.push('（本方案基于行业通用经验参数快速估算，正式实施前需专业工程团队复核）');
    return lines.join('\n');
  }

  $('copy-btn').addEventListener('click', () => {
    if (!currentPlan) return;
    copyText(buildTextSummary(currentPlan));
  });

  $('print-btn').addEventListener('click', () => {
    window.print();
  });

  $('export-btn').addEventListener('click', () => {
    if (!currentPlan) return;
    exportPoster(currentPlan);
  });

  function exportPoster(plan) {
    const width = 640;
    const rowHeight = 30;
    const height = 300 + plan.bomItems.length * rowHeight + 140;

    const canvas = $('poster-canvas');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    let y = 46;
    ctx.fillStyle = '#182430';
    ctx.font = 'bold 26px sans-serif';
    const project = $('p-project').value.trim();
    ctx.fillText(project ? `${project} 机房设计方案` : '数据中心机房设计方案', 32, y);

    y += 30;
    ctx.strokeStyle = '#eeeeee';
    ctx.beginPath();
    ctx.moveTo(32, y);
    ctx.lineTo(width - 32, y);
    ctx.stroke();

    const lines1 = [
      `机柜数量：${fmt(plan.rackCount)} 台　机房面积：${fmt(plan.roomArea, 1)} m²`,
      `总IT负载：${fmt(plan.itLoadKw, 1)} kW　设施总负载：${fmt(plan.facilityLoadKw, 1)} kW（PUE ${fmt(plan.targetPUE, 2)}）`,
      `UPS：${plan.upsModules} 台 × ${plan.upsModuleKva}kVA（${plan.powerRedundancy}）`,
      `制冷：${plan.cracUnits} 台 × ${plan.cracUnitKw}kW（${plan.coolingRedundancy}）`,
      `楼板承重：${plan.floorLoadOk ? '通过' : '超限'}（${fmt(plan.loadPerM2, 1)}/${fmt(plan.floorLoadCapacity)} kg/m²）`,
    ];
    y += 30;
    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#5b6b7c';
    lines1.forEach((line) => {
      ctx.fillText(line, 32, y);
      y += 26;
    });

    y += 14;
    ctx.beginPath();
    ctx.moveTo(32, y);
    ctx.lineTo(width - 32, y);
    ctx.stroke();

    y += 30;
    ctx.fillStyle = '#182430';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('设备清单', 32, y);

    ctx.font = '16px sans-serif';
    plan.bomItems.forEach((item) => {
      y += rowHeight;
      ctx.fillStyle = '#182430';
      ctx.fillText(`${item.label} × ${fmt(item.qty)}${item.unit}`, 40, y);
      ctx.fillStyle = '#5b6b7c';
      ctx.textAlign = 'right';
      ctx.fillText(`$${fmt(item.subtotal)}`, width - 40, y);
      ctx.textAlign = 'left';
    });

    y += 40;
    ctx.strokeStyle = '#eeeeee';
    ctx.beginPath();
    ctx.moveTo(32, y);
    ctx.lineTo(width - 32, y);
    ctx.stroke();

    y += 32;
    ctx.fillStyle = '#0e8f6f';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText(`预估总价：$${fmt(plan.totalCost)}`, 32, y);

    y += 34;
    ctx.fillStyle = '#8b98a7';
    ctx.font = '14px sans-serif';
    ctx.fillText('本方案基于行业通用经验参数快速估算，正式实施前需专业工程团队复核', 32, y);
    ctx.fillText(new Date().toLocaleString(), 32, y + 20);

    const dataUrl = canvas.toDataURL('image/png');
    $('poster-image').src = dataUrl;
    $('poster-download').href = dataUrl;
    $('poster-download').download = `机房设计方案_${Date.now()}.png`;
    $('poster-modal').classList.remove('hidden');
  }

  $('poster-close').addEventListener('click', () => $('poster-modal').classList.add('hidden'));
  $('poster-modal-mask').addEventListener('click', () => $('poster-modal').classList.add('hidden'));
})();
