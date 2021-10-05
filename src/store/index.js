import Vue from 'vue';
import Vuex from 'vuex';

import messages from './stores/messagesStore';
import users from './stores/usersStore';
import auth from './stores/authStore';
import images from './stores/imagesStore';
import time from './stores/timeStore';
import profiles from './stores/profilesStore';

Vue.use(Vuex);
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    // Start listener in ./store/authStore if required

    modules: {
      auth,
      images,
      messages,
      profiles,
      time,
      users,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING,
  });

  return Store;
}
