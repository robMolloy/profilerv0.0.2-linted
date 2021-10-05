<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
if (module.hot) {
  module.hot.accept(); // already had this init code

  module.hot.addStatusHandler((status) => {
    if (status === 'prepare') console.clear();
  });
}
import { mapActions } from 'vuex';
import { firebaseAuth } from './boot/firebase';

export default {
  name: 'App',
  methods: {
    ...mapActions('auth', ['onAuthStateChanged']),
  },

  async created() {
    firebaseAuth.onAuthStateChanged((user) => {
      this.onAuthStateChanged(user);
    });
  },
};
</script>
