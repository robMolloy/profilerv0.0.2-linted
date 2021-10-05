const upperState = {
  data: undefined,
  listeners: [],
  intervals: [],
};

const mutations = {
  setData(state, payload) {
    state.data = payload;
  },
  setTimeNow(state) {
    state.data = Date.now();
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

const actions = {
  intervalTimeNow({ commit }) {
    commit('setTimeNow');
    const interval = setInterval(() => commit('setTimeNow'), 1000);

    commit('addInterval', interval);
  },
};

const getters = {
  now: (state) => state.data,
  since: (state) => (pastTime) => state.data - pastTime,
};

export default {
  namespaced: true,
  state: upperState,
  mutations,
  actions,
  getters,
};
