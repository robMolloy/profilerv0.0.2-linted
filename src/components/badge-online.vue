<template>
  <span>

    <q-badge
      v-if="showBadge"
      :color="isUserActive ? 'light-green-5' : 'grey-4'"
    >
      {{ onlineText }}
    </q-badge>
    <span v-else>{{ onlineText }}</span>
  </span>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    lastActive: { type: Number },
    showBadge: { Type: Boolean, default: true },
  },
  data() {
    return {
      timeStart: Date.now(),
      offlineTime: 20000,
    };
  },
  methods: {},

  computed: {
    ...mapGetters('time', ['since']),
    isUserActive() {
      return this.since(this.lastActive) - this.offlineTime < 0;
    },
    onlineText() {
      return this.isUserActive ? 'online' : 'offline';
    },
  },
};
</script>

<style>
</style>
