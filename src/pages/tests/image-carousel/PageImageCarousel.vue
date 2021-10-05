<template>
  <div class="q-pa-md">
    <rm-image-carousel
      v-model="imageUrl"
      :images="images"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageImageCarousel',
  data() {
    return {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/smackchat-danny-app.appspot.com/o/5b4be52b-cdef-4c63-ae46-b8e9402c46ac?alt=media&token=84aa9264-1523-4784-b3ba-d37e3f722af1',
    };
  },
  computed: {
    ...mapGetters('images', { images: 'data' }),
  },
};
</script>

<style>
</style>
