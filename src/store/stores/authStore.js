import { firebaseAuth } from '../../boot/firebase';
import { setPersistedAuthentication } from '../../utils/firebase/firebaseUtils';

import {
  fetchUserById,
  userIsActive,
} from '../../utils/firestore/firestoreUtilsUsers';
// import { collection, addDoc } from "firebase/firestore";

const upperState = {
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

const actions = {
  async onUserAuthenticated({ commit, dispatch }) {
    let error;
    const { uid } = firebaseAuth.currentUser;
    const user = await fetchUserById(uid).catch((e) => { (error = e); });

    if (!error) {
      commit('setData', user);

      dispatch('users/initListener', null, { root: true });
      dispatch('messages/initListener', null, { root: true });
      dispatch('profiles/initListener', null, { root: true });
      dispatch('images/initListener', null, { root: true });

      dispatch('intervalUserIsActive');
    }
    // TODO: Prep for error

    return true;
  },
  async onUserUnauthenticated({ commit }) {
    console.log('onUserUnauthenticated');
    commit('setData', {});
    commit('removeListeners');

    commit('removeIntervals');
  },
  async onAuthStateChanged({ dispatch }, user) {
    setPersistedAuthentication(!!user);

    if (user) await dispatch('onUserAuthenticated');
    else await dispatch('onUserUnauthenticated');

    if (window.sendToOnAuthenticationChange) {
      this.$router.replace(window.sendToOnAuthenticationChange);
      window.sendToOnAuthenticationChange = undefined;
    }
  },
  userIsActive({ getters }) {
    const { uid } = getters;
    userIsActive(uid);
  },
  intervalUserIsActive({ commit, dispatch }) {
    dispatch('userIsActive');
    const interval = setInterval(() => dispatch('userIsActive'), 15000);

    commit('addInterval', interval);
  },
};

const getters = {
  isAuthenticated: (state) => {
    const { data } = state;
    if (data === undefined) { return JSON.parse(localStorage.getItem('isAuthenticated')); }

    return !!state.data.id;
  },
  uid: (state) => state?.data?.id,
};

export default {
  namespaced: true,
  state: upperState,
  mutations,
  actions,
  getters,
};
