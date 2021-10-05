import Store from './__Store';

const store = new Store({
  dbName: 'images',
  own: false,
});

store.addActions = {};

export default store.store;
