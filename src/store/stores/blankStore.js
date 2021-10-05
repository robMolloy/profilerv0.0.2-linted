const state = {
  data: undefined,
  listeners: [],
  intervals: [],
};

const mutations = {
  setData(state, payload) {
    state.data = payload;
  },
  addListener(state, payload) {
    state.listeners.push(payload);
  },
  removeListeners(state) {
    state.listeners.forEach((listener) => listener());
    state.listeners = [];
  },
  addInterval(state, payload) {
    state.intervals.push(payload);
  },
  removeIntervals(state) {
    state.intervals.forEach((interval) => clearInterval(interval));
    state.interval = [];
  },
};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
