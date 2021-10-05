<template>
  <q-page padding>

    <rm-card>
      <rm-tabs v-model="show">
        <rm-tab name="all">All</rm-tab>
        <rm-tab name="own">Own</rm-tab>
      </rm-tabs>

      <q-tab-panels
        v-model="show"
        animated
      >
        <q-tab-panel name="all">
          <display-profiles-grid :posts="posts" />
        </q-tab-panel>
        <q-tab-panel name="own">
          <display-profiles-grid :posts="ownPosts" />
        </q-tab-panel>
      </q-tab-panels>
    </rm-card>

    <rm-icon-sticky
      icon="add"
      @click="onClick"
    />
    <rm-dialog
      title="add profile"
      v-model="showDialogEditProfile"
    >
      <form-profile @success="showDialogEditProfile = false" />
      <!-- <form-profile @success="$emit('success')" /> -->

    </rm-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import DisplayProfilesGrid from 'src/components/display-profiles-grid.vue';
import FormProfile from 'src/components/custom/form/form-profile.vue';

export default {
  name: 'PageProfiles',
  components: {
    DisplayProfilesGrid,
    FormProfile,
  },
  data: () => ({
    show: 'all',
    formData: { profile: {} },
    showDialogEditProfile: false,
  }),
  methods: {
    onClick() {
      this.showDialogEditProfile = !this.showDialogEditProfile;
    },
  },
  computed: {
    ...mapGetters('auth', ['uid']),
    ...mapGetters('profiles', { posts: 'data', groupByUid: 'groupByUid' }),
    ownPosts() {
      return this.groupByUid(this.uid);
    },
  },
};
</script>
