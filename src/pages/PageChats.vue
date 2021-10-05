<template>
  <q-page
    v-if="loaded"
    class="flex column"
  >
    <q-banner class="bg-grey-4 text-center">
      {{user2.firstName}}
      is
      <badge-online
        :showBadge="false"
        :lastActive="user2.lastActive"
      />

    </q-banner>
    <div class="q-pa-md column col">
      <q-chat-message
        v-for="message in messageGroups"
        :name="message.sent ? 'me' : user2.firstName"
        :sent="message.sent"
        :text="message.text"
        :key="message.id"
      />
      <q-page-scroller
        reverse
        position="bottom-right"
        :scroll-offset="20"
        :offset="[18, 18]"
      >
        <q-btn
          fab
          icon="keyboard_arrow_down"
          color="dark"
        />
      </q-page-scroller>
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form
          @submit="onSubmit"
          class="full-width"
          ref="form"
        >

          <q-input
            v-model="newMessage"
            @keypress="onKeyPress"
            ref="messageInput"
            bg-color="white"
            label="Message"
            rounded
            outlined
            dense
            autogrow
            autofocus
          >

            <template v-slot:after>
              <q-btn
                @click="$refs.form.submit();"
                color="white"
                icon="send"
                round
                dense
                flat
              />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BadgeOnline from 'src/components/badge-online.vue';

export default {
  props: ['uid2'],
  components: {
    BadgeOnline,
  },
  data() {
    return {
      newMessage: '',
      console,
    };
  },
  computed: {
    ...mapGetters('auth', ['uid']),
    ...mapGetters('users', ['getUserById']),
    ...mapGetters('messages', ['valuesByUid2InGroupedFormat']),
    user2() {
      return this.getUserById(this.uid2);
    },

    messageGroups() {
      return this.valuesByUid2InGroupedFormat(this.uid2);
    },
    loaded() {
      return !!this.user2;
    },
  },
  methods: {
    ...mapActions('messages', ['sendMessage']),
    onSubmit() {
      this.sendMessage({ text: this.newMessage, uid2: this.uid2 });
      this.newMessage = '';
      this.$refs.messageInput.focus();
    },
    onKeyPress(e) {
      if (e.which === 13 && !e.shiftKey) {
        e.preventDefault();
        this.$refs.form.submit();
      }
    },
  },
  mounted() {},
};
</script>

<style>
</style>
