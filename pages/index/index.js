const { CONTAINER_PRESETS, calculate } = require('../../utils/calc.js');

Page({
  data: {
    containerOptions: [],
    selectedContainer: '20GP',
    currentContainer: null,
    customContainer: { length: '', width: '', height: '', maxPayload: '' },
    box: { length: '', width: '', height: '', weight: '' },
    result: null,
  },

  onLoad() {
    const containerOptions = Object.keys(CONTAINER_PRESETS)
      .map((key) => ({ key, label: CONTAINER_PRESETS[key].name }))
      .concat([{ key: 'CUSTOM', label: '自定义尺寸' }]);

    this.setData({
      containerOptions,
      currentContainer: CONTAINER_PRESETS['20GP'],
    });
  },

  onContainerChange(e) {
    const key = e.detail.value;
    this.setData({
      selectedContainer: key,
      currentContainer: CONTAINER_PRESETS[key] || null,
      result: null,
    });
  },

  onCustomContainerInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({ [`customContainer.${field}`]: e.detail.value, result: null });
  },

  onBoxInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({ [`box.${field}`]: e.detail.value, result: null });
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
    const b = this.data.box;
    const box = {
      length: parseFloat(b.length),
      width: parseFloat(b.width),
      height: parseFloat(b.height),
      weight: parseFloat(b.weight) || 0,
    };

    if (!box.length || !box.width || !box.height || box.length <= 0 || box.width <= 0 || box.height <= 0) {
      wx.showToast({ title: '请正确输入包装长宽高', icon: 'none' });
      return;
    }

    const container = this.resolveContainer();
    if (!container) {
      wx.showToast({ title: '请正确输入货柜尺寸', icon: 'none' });
      return;
    }

    const raw = calculate(box, container);

    if (raw.best.count <= 0) {
      wx.showToast({ title: '包装尺寸超出货柜尺寸，无法装入', icon: 'none' });
      this.setData({ result: null });
      return;
    }

    const result = Object.assign({}, raw, {
      limitingFactorText: raw.limitingFactor === 'weight' ? '受限于货柜限重' : '受限于货柜容积/摆放空间',
      volumeUtilizationText: `${(raw.volumeUtilization * 100).toFixed(1)}%`,
      weightUtilizationText: raw.weightUtilization !== null ? `${(raw.weightUtilization * 100).toFixed(1)}%` : '',
    });

    this.setData({ result });
  },
});
