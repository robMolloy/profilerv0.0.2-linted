<template>
  <rm-card class="q-my-md">
    <q-carousel
      ref="component"
      v-model="comp"
      animated
      swipeable
      thumbnails
      infinite
      arrows
      control-type="regular"
      control-color="white"
      control-text-color="primary"
    >
      {{ console.log(/*LL*/ 11, '123', 1223) }}
      <q-carousel-slide
        v-for="(imageUrl, i) of imageUrlValues"
        :key="imageUrl"
        :name="imageUrl"
        :img-src="imageUrl"
      />
      <template v-slot:control>
        <q-carousel-control position="top-right" :offset="[16, 18]">
          <rm-uploader @fileAdded="onFileAdded" />
        </q-carousel-control>
      </template>
    </q-carousel>
  </rm-card>
</template>

<script>
import firebaseStorage from 'src/utils/firebase/firebaseStorageUtils';
import { mapActions } from 'vuex';

export default {
  name: 'PageImageCarousel',

  props: {
    images: {
      default: () => ({}),
      required: true,
      type: Object,
    },
    value: { required: true },
    label: { default: () => 'Pick An Image' },
  },

  data() {
    return {
      componentValue: null,
    };
  },

  methods: {
    ...mapActions('images', { addImage: 'add' }),

    async onFileAdded(file) {
      const url = await firebaseStorage.add(file);

      const response = await this.addImage({ url });
      this.componentValue = url;
    },
    chooseFirstImage() {
      this.componentValue = this.imageValues[0].url;
    },
  },

  computed: {
    imageValues() {
      return Object.values(this.images);
    },
    imageUrlValues() {
      return this.imageValues.map(({ url }) => url);
    },
  },

  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this.childValue = newValue;
      },
    },

    componentValue: {
      handler(newValue, oldValue) {
        this.$emit('input', newValue);
      },
    },

    imageUrlValues: {
      handler(newValue, oldValue) {
        console.log(/* LL */ 91, 'newValue', newValue);
      },
    },
  },
  mounted() {
    if (!this.componentValue) {
      this.$refs.component.next();
    }
  },
};
</script>

<style>
</style>
