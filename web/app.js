(function () {
  const { CONTAINER_PRESETS, calculate, calculateMixed } = window.ContainerCalc;
  const MAX_CONTAINERS_LIMIT = 200;

  // ---------- 工具函数 ----------
  function $(id) {
    return document.getElementById(id);
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

  function shareOrCopy(payload) {
    if (navigator.share) {
      navigator.share(payload).catch(() => {});
    } else {
      copyText(`${payload.title}\n${payload.text}\n${payload.url || location.href}`);
      showToast('已复制分享内容到剪贴板');
    }
  }

  function buildContainerOptions(container, prefix, onChange) {
    const options = Object.keys(CONTAINER_PRESETS)
      .map((key) => ({ key, label: CONTAINER_PRESETS[key].name }))
      .concat([{ key: 'CUSTOM', label: '自定义尺寸' }]);

    container.innerHTML = '';
    options.forEach((opt, idx) => {
      const label = document.createElement('label');
      label.className = 'radio-item';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `${prefix}-container`;
      input.value = opt.key;
      if (idx === 0) input.checked = true;
      input.addEventListener('change', () => onChange(opt.key));
      const span = document.createElement('span');
      span.textContent = opt.label;
      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });
    return options[0].key;
  }

  function resolveContainer(prefix, selectedKey) {
    if (selectedKey !== 'CUSTOM') {
      return CONTAINER_PRESETS[selectedKey];
    }
    const length = parseFloat($(`${prefix}-c-length`).value);
    const width = parseFloat($(`${prefix}-c-width`).value);
    const height = parseFloat($(`${prefix}-c-height`).value);
    const maxPayload = parseFloat($(`${prefix}-c-maxPayload`).value);
    if (!length || !width || !height || length <= 0 || width <= 0 || height <= 0) {
      return null;
    }
    return { length, width, height, maxPayload: maxPayload > 0 ? maxPayload : Infinity };
  }

  // ---------- 顶部 Tab 切换 ----------
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      $(`tab-${btn.dataset.tab}`).classList.add('active');
      const isSingle = btn.dataset.tab === 'single';
      $('mix-summary-bar').classList.toggle('hidden', !isSingle ? !mixState.result : true);
      if (isSingle) {
        $('mix-summary-bar').classList.add('hidden');
        closeMixDetail();
      } else if (mixState.result) {
        $('mix-summary-bar').classList.remove('hidden');
      }
    });
  });

  // =====================================================================
  // 单件装柜量
  // =====================================================================
  const singleState = { selectedContainer: null };

  function updateSingleContainerInfo() {
    const isCustom = singleState.selectedContainer === 'CUSTOM';
    $('single-custom-inputs').classList.toggle('hidden', !isCustom);
    const info = $('single-container-info');
    if (isCustom) {
      info.textContent = '';
    } else {
      const c = CONTAINER_PRESETS[singleState.selectedContainer];
      info.textContent = `内尺寸: ${c.length} x ${c.width} x ${c.height} cm，限重约 ${c.maxPayload} kg`;
    }
  }

  singleState.selectedContainer = buildContainerOptions($('single-container-options'), 'single', (key) => {
    singleState.selectedContainer = key;
    updateSingleContainerInfo();
    $('single-result-card').classList.add('hidden');
  });
  updateSingleContainerInfo();

  let singleResult = null;

  $('single-calc-btn').addEventListener('click', () => {
    const box = {
      length: parseFloat($('single-b-length').value),
      width: parseFloat($('single-b-width').value),
      height: parseFloat($('single-b-height').value),
      weight: parseFloat($('single-b-weight').value) || 0,
    };

    if (!box.length || !box.width || !box.height || box.length <= 0 || box.width <= 0 || box.height <= 0) {
      showToast('请正确输入包装长宽高');
      return;
    }

    const container = resolveContainer('single', singleState.selectedContainer);
    if (!container) {
      showToast('请正确输入货柜尺寸');
      return;
    }

    const raw = calculate(box, container);
    if (raw.best.count <= 0) {
      showToast('包装尺寸超出货柜尺寸，无法装入');
      $('single-result-card').classList.add('hidden');
      return;
    }

    singleResult = Object.assign({}, raw, {
      limitingFactorText: raw.limitingFactor === 'weight' ? '受限于货柜限重' : '受限于货柜容积/摆放空间',
      volumeUtilizationText: `${(raw.volumeUtilization * 100).toFixed(1)}%`,
      weightUtilizationText: raw.weightUtilization !== null ? `${(raw.weightUtilization * 100).toFixed(1)}%` : '',
    });

    $('single-r-qty').textContent = `预计可装：${singleResult.finalQty} 件`;
    $('single-r-limit').textContent = `限制因素：${singleResult.limitingFactorText}`;
    $('single-r-arrangement-count').textContent =
      `推荐摆放件数(长x宽x高方向)：${singleResult.best.counts[0]} x ${singleResult.best.counts[1]} x ${singleResult.best.counts[2]}`;
    $('single-r-arrangement-dims').textContent =
      `对应朝向尺寸(长/宽/高,cm)：${singleResult.best.arrangement[0]} / ${singleResult.best.arrangement[1]} / ${singleResult.best.arrangement[2]}`;
    $('single-r-theoretical').textContent = `仅按体积理论上限：${singleResult.theoreticalMax} 件`;
    $('single-r-volume-util').textContent = `容积利用率：${singleResult.volumeUtilizationText}`;
    $('single-r-weight-util').textContent = singleResult.weightUtilizationText ? `载重利用率：${singleResult.weightUtilizationText}` : '';
    $('single-r-weight-util').classList.toggle('hidden', !singleResult.weightUtilizationText);

    $('single-result-card').classList.remove('hidden');
    $('single-result-card').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  function buildSingleTextSummary() {
    if (!singleResult) return '';
    const r = singleResult;
    const lines = [
      '【单件装柜量计算】',
      `预计可装：${r.finalQty} 件`,
      `限制因素：${r.limitingFactorText}`,
      `推荐摆放件数(长x宽x高方向)：${r.best.counts[0]} x ${r.best.counts[1]} x ${r.best.counts[2]}`,
      `对应朝向尺寸(长/宽/高,cm)：${r.best.arrangement[0]} / ${r.best.arrangement[1]} / ${r.best.arrangement[2]}`,
      `容积利用率：${r.volumeUtilizationText}`,
    ];
    if (r.weightUtilizationText) lines.push(`载重利用率：${r.weightUtilizationText}`);
    lines.push('（估算结果仅供参考，实际装柜以现场核算为准）');
    return lines.join('\n');
  }

  $('single-copy-btn').addEventListener('click', () => {
    const text = buildSingleTextSummary();
    if (text) copyText(text);
  });

  $('single-share-btn').addEventListener('click', () => {
    const text = buildSingleTextSummary();
    if (!text) return;
    shareOrCopy({ title: '货柜装柜量计算结果', text, url: location.href });
  });

  // =====================================================================
  // 混装方案
  // =====================================================================
  let itemIdSeed = 0;
  function nextItemId() {
    itemIdSeed += 1;
    return `item_${itemIdSeed}`;
  }

  const mixState = {
    selectedContainer: null,
    items: [],
    result: null,
  };

  function emptyItem() {
    return { id: nextItemId(), label: '', length: '', width: '', height: '', weight: '', qty: '' };
  }

  function updateMixContainerInfo() {
    const isCustom = mixState.selectedContainer === 'CUSTOM';
    $('mix-custom-inputs').classList.toggle('hidden', !isCustom);
    const info = $('mix-container-info');
    if (isCustom) {
      info.textContent = '';
    } else {
      const c = CONTAINER_PRESETS[mixState.selectedContainer];
      info.textContent = `内尺寸: ${c.length} x ${c.width} x ${c.height} cm，限重约 ${c.maxPayload} kg`;
    }
  }

  mixState.selectedContainer = buildContainerOptions($('mix-container-options'), 'mix', (key) => {
    mixState.selectedContainer = key;
    updateMixContainerInfo();
    clearMixResult();
  });
  // 默认选 40HQ（与小程序保持一致）
  (function setDefaultMixContainer() {
    const radios = document.querySelectorAll('input[name="mix-container"]');
    radios.forEach((r) => {
      r.checked = r.value === '40HQ';
    });
    mixState.selectedContainer = '40HQ';
  })();
  updateMixContainerInfo();

  function renderMixItems() {
    const wrap = $('mix-items');
    wrap.innerHTML = '';
    mixState.items.forEach((it, idx) => {
      const card = document.createElement('div');
      card.className = 'item-card';

      const header = document.createElement('div');
      header.className = 'item-card-header';

      const labelInput = document.createElement('input');
      labelInput.type = 'text';
      labelInput.placeholder = '规格名称（选填，如：产品A）';
      labelInput.value = it.label;
      labelInput.addEventListener('input', (e) => {
        it.label = e.target.value;
        clearMixResult();
      });
      header.appendChild(labelInput);

      if (mixState.items.length > 1) {
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = '删除';
        removeBtn.addEventListener('click', () => {
          mixState.items = mixState.items.filter((x) => x.id !== it.id);
          clearMixResult();
          renderMixItems();
        });
        header.appendChild(removeBtn);
      }

      card.appendChild(header);

      const grid = document.createElement('div');
      grid.className = 'item-grid';

      const fields = [
        { key: 'length', label: '长cm', wide: false },
        { key: 'width', label: '宽cm', wide: false },
        { key: 'height', label: '高cm', wide: false },
        { key: 'weight', label: '重量kg', wide: false },
        { key: 'qty', label: '数量(件)', wide: true },
      ];

      fields.forEach((f) => {
        const field = document.createElement('div');
        field.className = `item-field${f.wide ? ' wide' : ''}`;
        const lab = document.createElement('label');
        lab.textContent = f.label;
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.value = it[f.key];
        input.addEventListener('input', (e) => {
          it[f.key] = e.target.value;
          clearMixResult();
        });
        field.appendChild(lab);
        field.appendChild(input);
        grid.appendChild(field);
      });

      card.appendChild(grid);
      wrap.appendChild(card);
    });
  }

  mixState.items = [emptyItem(), emptyItem()];
  renderMixItems();

  $('mix-add-item').addEventListener('click', () => {
    mixState.items.push(emptyItem());
    clearMixResult();
    renderMixItems();
  });

  function clearMixResult() {
    mixState.result = null;
    $('mix-summary-bar').classList.add('hidden');
    $('mix-result-spacer').classList.add('hidden');
    closeMixDetail();
  }

  function closeMixDetail() {
    $('mix-detail-mask').classList.add('hidden');
    $('mix-detail-panel').classList.add('hidden');
    $('mix-toggle-detail').textContent = '详情 ▴';
  }

  function openMixDetail() {
    renderMixDetail();
    $('mix-detail-mask').classList.remove('hidden');
    $('mix-detail-panel').classList.remove('hidden');
    $('mix-toggle-detail').textContent = '收起 ▾';
  }

  $('mix-toggle-detail').addEventListener('click', () => {
    if ($('mix-detail-panel').classList.contains('hidden')) {
      openMixDetail();
    } else {
      closeMixDetail();
    }
  });
  $('mix-detail-mask').addEventListener('click', closeMixDetail);

  $('mix-calc-btn').addEventListener('click', () => {
    const container = resolveContainer('mix', mixState.selectedContainer);
    if (!container) {
      showToast('请正确输入货柜尺寸');
      return;
    }

    const items = [];
    for (let i = 0; i < mixState.items.length; i += 1) {
      const raw = mixState.items[i];
      const length = parseFloat(raw.length);
      const width = parseFloat(raw.width);
      const height = parseFloat(raw.height);
      const weight = parseFloat(raw.weight) || 0;
      const qty = parseInt(raw.qty, 10) || 0;

      if (!length || !width || !height || length <= 0 || width <= 0 || height <= 0 || qty <= 0) {
        showToast(`请完整填写第${i + 1}项的长宽高和数量`);
        return;
      }
      items.push({ label: raw.label && raw.label.trim() ? raw.label.trim() : `规格${i + 1}`, length, width, height, weight, qty });
    }

    const raw = calculateMixed(items, container);

    const errEl = $('mix-error');
    if (raw.error === 'TOO_LARGE') {
      errEl.textContent = `以下规格尺寸超出货柜内部空间，无法装入：${raw.impossibleItems.join('、')}`;
      errEl.classList.remove('hidden');
      clearMixResult();
      return;
    }
    errEl.classList.add('hidden');

    const containers = raw.containers.map((c) => ({
      ...c,
      totalWeightText: c.totalWeight > 0 ? c.totalWeight.toFixed(1) : '',
      volumeUtilizationText: `${((c.totalVolume / raw.containerVolume) * 100).toFixed(1)}%`,
    }));

    mixState.result = Object.assign({}, raw, {
      containers,
      avgVolumeUtilizationText: `${(raw.avgVolumeUtilization * 100).toFixed(1)}%`,
    });

    $('mix-s-total').textContent = mixState.result.totalRequestedQty;
    $('mix-s-containers').textContent = mixState.result.containersNeeded;
    $('mix-s-util').textContent = mixState.result.avgVolumeUtilizationText;

    $('mix-summary-bar').classList.remove('hidden');
    $('mix-result-spacer').classList.remove('hidden');
    openMixDetail();
  });

  function renderMixDetail() {
    const r = mixState.result;
    if (!r) return;
    const scroll = $('mix-detail-scroll');
    scroll.innerHTML = '';

    if (!r.fullyPlaced) {
      const warn = document.createElement('p');
      warn.className = 'warn-line';
      warn.textContent = `部分数量按估算上限（${MAX_CONTAINERS_LIMIT}个货柜）未能全部装完，请拆分批次或联系客服核算`;
      scroll.appendChild(warn);
    }

    r.containers.forEach((c, idx) => {
      const block = document.createElement('div');
      block.className = 'container-block';

      const title = document.createElement('div');
      title.className = 'container-block-title';
      title.textContent = `第 ${idx + 1} 个货柜`;
      block.appendChild(title);

      c.breakdown.forEach((b) => {
        if (b.placedQty > 0) {
          const row = document.createElement('div');
          row.className = 'item-row';
          row.textContent = `${b.label}：${b.placedQty} 件`;
          block.appendChild(row);
        }
      });

      if (c.totalWeightText) {
        const row = document.createElement('div');
        row.className = 'item-row muted';
        row.textContent = `该柜总重：约 ${c.totalWeightText} kg`;
        block.appendChild(row);
      }

      const utilRow = document.createElement('div');
      utilRow.className = 'item-row muted';
      utilRow.textContent = `该柜容积利用率：${c.volumeUtilizationText}`;
      block.appendChild(utilRow);

      scroll.appendChild(block);
    });
  }

  function buildMixTextSummary() {
    const r = mixState.result;
    if (!r) return '';
    const lines = [];
    lines.push('【货柜混装方案】');
    lines.push(`总件数：${r.totalRequestedQty} 件，预计需要 ${r.containersNeeded} 个货柜`);
    lines.push(`平均容积利用率：${r.avgVolumeUtilizationText}`);
    r.containers.forEach((c, idx) => {
      lines.push(`\n第${idx + 1}个货柜：`);
      c.breakdown.forEach((b) => {
        if (b.placedQty > 0) lines.push(`  ${b.label}：${b.placedQty} 件`);
      });
      if (c.totalWeightText) lines.push(`  总重：约 ${c.totalWeightText} kg`);
    });
    if (!r.fullyPlaced) lines.push('\n注：数量较大，超出估算上限，请拆分批次核算');
    lines.push('\n（估算结果仅供参考，实际装柜以现场核算为准）');
    return lines.join('\n');
  }

  $('mix-copy-btn').addEventListener('click', () => {
    const text = buildMixTextSummary();
    if (text) copyText(text);
  });

  $('mix-share-btn').addEventListener('click', () => {
    const text = buildMixTextSummary();
    if (!text) return;
    shareOrCopy({ title: '货柜混装方案', text, url: location.href });
  });

  // ---------- 导出图片（canvas 绘制） ----------
  $('mix-export-btn').addEventListener('click', () => {
    const r = mixState.result;
    if (!r) return;

    const width = 600;
    const rowHeight = 34;
    let contentRows = 0;
    r.containers.forEach((c) => {
      contentRows += 1;
      contentRows += c.breakdown.filter((b) => b.placedQty > 0).length;
    });
    const height = 260 + contentRows * rowHeight + 120;

    const canvas = $('poster-canvas');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    drawPoster(ctx, width, height, r);

    const dataUrl = canvas.toDataURL('image/png');
    $('poster-image').src = dataUrl;
    $('poster-download').href = dataUrl;
    $('poster-download').download = `货柜混装方案_${Date.now()}.png`;
    $('poster-modal').classList.remove('hidden');
  });

  function drawPoster(ctx, width, height, r) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    let y = 50;
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 32px sans-serif';
    ctx.fillText('货柜混装方案', 32, y);

    y += 40;
    ctx.strokeStyle = '#eeeeee';
    ctx.beginPath();
    ctx.moveTo(32, y);
    ctx.lineTo(width - 32, y);
    ctx.stroke();

    y += 40;
    ctx.font = '24px sans-serif';
    ctx.fillStyle = '#576574';
    ctx.fillText(`总件数：${r.totalRequestedQty} 件`, 32, y);

    y += 36;
    ctx.fillStyle = '#10ac84';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText(`预计需要 ${r.containersNeeded} 个货柜`, 32, y);

    y += 36;
    ctx.fillStyle = '#576574';
    ctx.font = '24px sans-serif';
    ctx.fillText(`平均容积利用率：${r.avgVolumeUtilizationText}`, 32, y);

    y += 30;
    ctx.beginPath();
    ctx.moveTo(32, y);
    ctx.lineTo(width - 32, y);
    ctx.stroke();

    r.containers.forEach((c, idx) => {
      y += 40;
      ctx.fillStyle = '#2c3e50';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText(`第 ${idx + 1} 个货柜`, 32, y);

      c.breakdown.forEach((b) => {
        if (b.placedQty > 0) {
          y += 34;
          ctx.fillStyle = '#2c3e50';
          ctx.font = '24px sans-serif';
          ctx.fillText(`${b.label}：${b.placedQty} 件`, 52, y);
        }
      });
    });

    y += 50;
    ctx.fillStyle = '#a4b0be';
    ctx.font = '20px sans-serif';
    ctx.fillText('估算结果仅供参考，实际装柜以现场核算为准', 32, y);
    ctx.fillText(new Date().toLocaleString(), 32, y + 28);
  }

  $('poster-close').addEventListener('click', () => $('poster-modal').classList.add('hidden'));
  $('poster-modal-mask').addEventListener('click', () => $('poster-modal').classList.add('hidden'));
})();
