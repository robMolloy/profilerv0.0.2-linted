import Store from './__Store';

const store = new Store({
  dbName: 'profiles',
  own: false,
});

store.addActions = {};

export default store.store;
