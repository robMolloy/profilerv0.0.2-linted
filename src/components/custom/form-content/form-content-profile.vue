<template>
  <div>
    <rm-image-carousel v-model="formData.image" :images="images" />

    <rm-input autofocus label="Company" v-model="formData.company" />
    <rm-input label="Description" v-model="formData.description" />
    <rm-input label="Location" v-model="formData.location" />
    <rm-input label="Title" v-model="formData.title" />
    <rm-hashtag-input label="Hashtags" v-model="formData.hashtags" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { modelProfile } from '../../../models/modelProfile';

export default {
  data: () => ({
    formData: {},
  }),
  computed: {
    ...mapGetters('images', { images: 'data' }),
  },
  watch: {
    formData: {
      handler(data) {
        this.$emit('update', data);
      },
      deep: true,
    },
  },
  created() {
    this.formData = modelProfile.fillTemplate(this.data);
  },
};
</script>
