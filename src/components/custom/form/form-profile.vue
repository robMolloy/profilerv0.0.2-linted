<template>
  <q-form @submit="onSubmit">
    <q-card-section style="max-height:60vh;" class="scroll">
      <form-content-profile @update="onUpdate" />
    </q-card-section>
    <rm-row-buttons>
      <rm-button-back v-close-popup />
      <rm-button-submit :disable="submitDisable" />
    </rm-row-buttons>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex';
import FormContentProfile from 'src/components/custom/form-content/form-content-profile.vue';

import { v4 as uuid } from 'uuid';
import { storage } from '../../../boot/firebase';

export default {
  name: 'form-profile',
  components: {
    FormContentProfile,
  },
  data: () => ({
    formData: {},
    submitDisable: false,
  }),
  methods: {
    ...mapActions('profiles', { addImage: 'add' }),
    showSubmitError(e) {
      this.$q.notify({
        position: 'top',
        type: 'negative',
        message: `<div>There was an error adding a new profile</div><sub>${e.toString()}</sub>`,
        html: true,
      });
    },
    onSubmitError(e) {
      this.showSubmitError(e);
    },
    onSubmitSuccess(e) {
      // this.showSubmitError(e);
      console.log(/* LL */ 11, 'e', e);
    },

    async onSubmit(e) {
      this.$q.loading.show();
      this.formData.imageUrl = await this.uploadFile(this.formData.image);
      delete this.formData.image;

      await this.addImage(this.formData)
        .catch(this.onSubmitError)
        .then(this.onSubmitSuccess);

      this.$q.loading.hide();
      console.log(/* LL */ 57, 'e', e);
    },
    onUpdate(data) {
      this.formData = data;
    },
    uploadFile(file) {
      const ref = storage.ref().child(uuid());

      return new Promise((res, rej) => {
        ref
          .put(file)
          .then((snapshot) => res(snapshot.ref.getDownloadURL()))
          .catch((e) => rej(e));
      });
    },
  },
};
</script>
