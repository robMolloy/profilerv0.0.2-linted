<template>
  <q-page padding>
    <q-list
      class="full-width"
      separator
    >
      <q-item
        v-for="user in Object.values(usersFiltered)"
        :key="user.id"
        clickable
        v-ripple
        :to="`/chats/${user.id}`"
      >
        <q-item-section avatar>
          <q-avatar
            color="primary"
            text-color="white"
          >
            {{ getUserAvatar(user) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ getUserDisplayName(user) }}</q-item-label>

          <q-item-label
            caption
            lines="1"
          >
            some text here
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <badge-online :lastActive="user.lastActive" />

        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import BadgeOnline from 'src/components/badge-online.vue';
import {
  getUserAvatar,
  isUserActive,
  getUserDisplayName,
} from '../utils/utilsUser';

export default {
  components: {
    BadgeOnline,
  },
  data() {
    return {
      isUserActive,
      getUserAvatar,
      getUserDisplayName,
    };
  },
  computed: {
    ...mapGetters('users', ['usersFiltered']),
  },
};
</script>

<style>
</style>
