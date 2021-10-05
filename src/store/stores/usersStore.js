import Store from './__Store';

const store = new Store({
  dbName: 'users',
  own: false,
  requiresAuthentication: true,
  where: [],
});

store.addGetters = {
  usersFiltered: (state, getters, rootState, rootGetters) => {
    const users = { ...state.data };
    const uid = rootGetters['auth/uid'];
    if (uid) delete users[uid];
    return users;
  },
  getUserById: (state) => (id) => state?.data?.[id],
};

export default store.store;
