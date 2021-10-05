<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          @click="onBackClick"
          :color="hasBackRedirect ? 'white' : 'primary'"
          icon="arrow_back"
          flat
          round
          aria-label="Back"
        />
        <q-toolbar-title :style="{textTransform:'capitalize', textAlign:'center'}">
          {{ $t(`pages.${$route.name}.title`) }}
        </q-toolbar-title>

        <q-btn
          flat
          round
          icon="menu"
          aria-label="Menu"
          @click="drawerOpen = !drawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerOpen"
      bordered
      show-if-above
      content-class="bg-grey-1"
      side="left"
      :width="225"
      :breakpoint="10000"
    >
      <q-scroll-area class="fit">

        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          />
          <essential-link
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import EssentialLink from 'src/components/essential-link.vue';
import { logoutUser } from '../utils/firebase/firebaseUtils';

const backButtonRedirects = {
  PageChats: '/users',
};

export default {
  name: 'MainLayout',
  components: { EssentialLink },

  data() {
    return {
      drawerOpen: false,
      logoutUser,
      interval: undefined,
      backButtonRedirects,
    };
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'uid']),
    essentialLinks() {
      return [
        {
          title: this.isAuthenticated ? 'Log out' : 'Log in | Sign up',
          caption: this.isAuthenticated ? "I'm outta here" : 'Let me in!',
          icon: this.isAuthenticated ? 'logout' : 'login',
          link: '/auth',
          onClick: async () => {
            if (this.isAuthenticated) this.logoutUser();
          },
        },
        {
          title: 'Contacts',
          caption: 'Friends',
          icon: 'people',
          link: '/users',
        },
        {
          title: 'Profiles',
          caption: 'Look around',
          icon: 'question_answer',
          link: '/profiles',
        },
      ];
    },
    hasBackRedirect() {
      return !!this.backButtonRedirects[this.$route.name];
    },
    onPageUsers() {
      return this.$route.name === 'PageUsers';
    },
  },
  methods: {
    ...mapActions('time', ['intervalTimeNow']),
    onBackClick() {
      return this.hasBackRedirect
        ? this.$router.push(backButtonRedirects[this.$route.name])
        : undefined;
    },
  },
  mounted() {
    this.intervalTimeNow();
  },
  beforeUnmount() {},
};
</script>
