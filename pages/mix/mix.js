const { CONTAINER_PRESETS, calculateMixed } = require('../../utils/calc.js');

const MAX_CONTAINERS_LIMIT = 200;
let idSeed = 0;
function nextId() {
  idSeed += 1;
  return `item_${idSeed}`;
}

function emptyItem() {
  return { id: nextId(), label: '', length: '', width: '', height: '', weight: '', qty: '' };
}

Page({
  data: {
    containerOptions: [],
    selectedContainer: '40HQ',
    currentContainer: null,
    customContainer: { length: '', width: '', height: '', maxPayload: '' },
    items: [],
    result: null,
    errorText: '',
    showDetail: false,
    posterImage: '',
    maxContainersLimit: MAX_CONTAINERS_LIMIT,
  },

  onLoad() {
    const containerOptions = Object.keys(CONTAINER_PRESETS)
      .map((key) => ({ key, label: CONTAINER_PRESETS[key].name }))
      .concat([{ key: 'CUSTOM', label: '自定义尺寸' }]);

    this.setData({
      containerOptions,
      currentContainer: CONTAINER_PRESETS['40HQ'],
      items: [emptyItem(), emptyItem()],
    });
  },

  onShareAppMessage() {
    return {
      title: '货柜混装方案计算器',
      path: '/pages/mix/mix',
    };
  },

  onContainerChange(e) {
    const key = e.detail.value;
    this.setData({
      selectedContainer: key,
      currentContainer: CONTAINER_PRESETS[key] || null,
      result: null,
      showDetail: false,
    });
  },

  onCustomContainerInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({ [`customContainer.${field}`]: e.detail.value, result: null });
  },

  onAddItem() {
    this.setData({ items: this.data.items.concat([emptyItem()]), result: null });
  },

  onRemoveItem(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({ items: this.data.items.filter((it) => it.id !== id), result: null });
  },

  onItemInput(e) {
    const { id, field } = e.currentTarget.dataset;
    const items = this.data.items.map((it) => (it.id === id ? { ...it, [field]: e.detail.value } : it));
    this.setData({ items, result: null });
  },

  resolveContainer() {
    if (this.data.selectedContainer !== 'CUSTOM') {
      return CONTAINER_PRESETS[this.data.selectedContainer];
    }
    const c = this.data.customContainer;
    const length = parseFloat(c.length);
    const width = parseFloat(c.width);
    const height = parseFloat(c.height);
    const maxPayload = parseFloat(c.maxPayload);
    if (!length || !width || !height || length <= 0 || width <= 0 || height <= 0) {
      return null;
    }
    return { length, width, height, maxPayload: maxPayload > 0 ? maxPayload : Infinity };
  },

  onCalculate() {
    const container = this.resolveContainer();
    if (!container) {
      wx.showToast({ title: '请正确输入货柜尺寸', icon: 'none' });
      return;
    }

    const items = [];
    for (let i = 0; i < this.data.items.length; i += 1) {
      const raw = this.data.items[i];
      const length = parseFloat(raw.length);
      const width = parseFloat(raw.width);
      const height = parseFloat(raw.height);
      const weight = parseFloat(raw.weight) || 0;
      const qty = parseInt(raw.qty, 10) || 0;

      if (!length || !width || !height || length <= 0 || width <= 0 || height <= 0 || qty <= 0) {
        wx.showToast({ title: `请完整填写第${i + 1}项的长宽高和数量`, icon: 'none' });
        return;
      }
      items.push({ label: raw.label && raw.label.trim() ? raw.label.trim() : `规格${i + 1}`, length, width, height, weight, qty });
    }

    const raw = calculateMixed(items, container);

    if (raw.error === 'TOO_LARGE') {
      this.setData({
        result: null,
        errorText: `以下规格尺寸超出货柜内部空间，无法装入：${raw.impossibleItems.join('、')}`,
      });
      return;
    }

    const containers = raw.containers.map((c) => ({
      ...c,
      totalWeightText: c.totalWeight > 0 ? c.totalWeight.toFixed(1) : '',
      volumeUtilizationText: `${((c.totalVolume / raw.containerVolume) * 100).toFixed(1)}%`,
    }));

    const result = {
      ...raw,
      containers,
      avgVolumeUtilizationText: `${(raw.avgVolumeUtilization * 100).toFixed(1)}%`,
    };

    this.setData({ result, errorText: '', showDetail: true });
  },

  onToggleDetail() {
    this.setData({ showDetail: !this.data.showDetail });
  },

  buildTextSummary() {
    const r = this.data.result;
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
  },

  onCopyResult() {
    const text = this.buildTextSummary();
    if (!text) return;
    wx.setClipboardData({
      data: text,
      success: () => wx.showToast({ title: '已复制到剪贴板', icon: 'success' }),
    });
  },

  onGeneratePoster() {
    const r = this.data.result;
    if (!r) return;

    const width = 600;
    const rowHeight = 34;
    let contentRows = 0;
    r.containers.forEach((c) => {
      contentRows += 1; // 货柜标题行
      contentRows += c.breakdown.filter((b) => b.placedQty > 0).length;
    });
    const height = 260 + contentRows * rowHeight + 120;

    const query = wx.createSelectorQuery().in(this);
    query
      .select('#posterCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        if (!res || !res[0] || !res[0].node) {
          wx.showToast({ title: '生成图片失败', icon: 'none' });
          return;
        }
        const canvas = res[0].node;
        const ctx = canvas.getContext('2d');
        const dpr = wx.getWindowInfo ? wx.getWindowInfo().pixelRatio : wx.getSystemInfoSync().pixelRatio;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        this.drawPoster(ctx, width, height, r);

        wx.canvasToTempFilePath(
          {
            canvas,
            width,
            height,
            destWidth: width * dpr,
            destHeight: height * dpr,
            success: (result) => this.setData({ posterImage: result.tempFilePath }),
            fail: () => wx.showToast({ title: '生成图片失败', icon: 'none' }),
          },
          this,
        );
      });
  },

  drawPoster(ctx, width, height, r) {
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
  },

  onSavePoster() {
    if (!this.data.posterImage) return;
    wx.saveImageToPhotosAlbum({
      filePath: this.data.posterImage,
      success: () => wx.showToast({ title: '已保存到相册', icon: 'success' }),
      fail: (err) => {
        if (err.errMsg && err.errMsg.indexOf('auth') >= 0) {
          wx.showToast({ title: '请在设置中允许保存到相册', icon: 'none' });
        } else {
          wx.showToast({ title: '保存失败', icon: 'none' });
        }
      },
    });
  },

  onClosePoster() {
    this.setData({ posterImage: '' });
  },
});
