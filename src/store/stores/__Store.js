import cloneDeep from 'lodash/cloneDeep';
import { index, group } from '../../utils/indexer';
import FirestoreUtilsDefault from '../../utils/firestore/__FirestoreUtilsDefault';
import { db } from '../../boot/firebase';

class Store {
  constructor(props) {
    const {
      dbName,
      initData = {},
      own = true,
      requiresAuthentication = true,
      where = [],
      utils = new FirestoreUtilsDefault({ collectionName: dbName }),
    } = props;

    this.initData = cloneDeep(initData);
    this.dbName = dbName;
    this.own = own;
    this.requiresAuthentication = requiresAuthentication;
    this.where = where;
    this.utils = utils;

    this.addState = {};
    this.addMutations = {};
    this.addActions = {};
    this.addGetters = {};
  }

  get defaultState() {
    return {
      data: this.initData,
      listeners: [],
      intervals: [],
    };
  }

  // eslint-disable-next-line
  get defaultMutations() {
    return {
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
  }

  get defaultActions() {
    return {
      initListener: ({ commit, rootGetters }) => {
        const uid = rootGetters['auth/uid'];
        let collection = db.collection(this.dbName);

        if (this.own) collection = collection.where('uid', '==', uid);
        this.where.forEach(([key, equality, value]) => {
          collection = collection.where(key, equality, value);
        });

        const listener = collection.onSnapshot((snapshot) => {
          const data = {};
          snapshot.docs.forEach((itm) => { (data[itm.id] = itm.data()); });
          commit('setData', data);
        });

        if (this.requiresAuthentication) {
          commit('auth/addListener', listener, { root: true });
        } else {
          commit('addListener', listener);
        }
      },
      add: ({ rootGetters }, payload) => {
        const uid = rootGetters['auth/uid'];
        return this.utils.add({ ...payload, uid });
      },
    };
  }

  // getters are for accessing state only!!!
  get defaultGetters() {
    return {
      data: (state) => state.data,
      [this.dbName]: (state) => state.data,
      orderValuesByKey: (state) => (key) => {
        Object.values(state.data).sort((a, b) => (a[key] < b[key] ? -1 : 1));
      },
      indexOnKey: (state) => (key) => index(state).on(key),
      groupByKey: (state, getters) => (key) => group(getters.data).by(key),
      groupValuesByKey: (state, getters) => (key, orderKey) => {
        const { groupByKey } = getters;
        const groups = groupByKey(key);
        const groupValues = {};

        Object.entries(groups).forEach(([key1, objGroup]) => {
          const valuesOnKey1 = Object.values(objGroup);
          if (orderKey) valuesOnKey1.sort((a, b) => a[orderKey] - b[orderKey]);
          groupValues[key1] = valuesOnKey1;
        });

        return groupValues;
      },
      // TODO groupByUid should only group
      groupByUid: (state, getters) => (uid) => getters.groupByKey('uid')[uid],

      own: (state, getters, rootState, rootGetters) => {
        const uid = rootGetters['auth/uid'];
        return getters.groupByUid(uid);
      },
      others: (state, getters, rootState, rootGetters) => {
        const uid = rootGetters['auth/uid'];
        const data = getters.groupByUid(uid);
        return data;
      },
    };
  }

  get state() {
    return { ...this.defaultState, ...this.addState };
  }

  get mutations() {
    return { ...this.defaultMutations, ...this.addMutations };
  }

  get actions() {
    return { ...this.defaultActions, ...this.addActions };
  }

  get getters() {
    return { ...this.defaultGetters, ...this.addGetters };
  }

  get store() {
    return {
      namespaced: true,
      state: this.state,
      mutations: this.mutations,
      actions: this.actions,
      getters: this.getters,
    };
  }
}

export default Store;
