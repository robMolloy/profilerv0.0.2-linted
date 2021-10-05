<template>
  <div>
    <q-btn
      @click="component.pickFiles()"
      size="11px"
      round
      color="white"
      text-color="primary"
      icon="add"
    />
    <q-uploader multiple v-show="false" ref="uploader" @added="onAdded" />
  </div>
</template>

<script>
export default {
  name: 'rm-uploader',
  data: () => ({ value: [], component: null }),
  computed: {
    file() {
      return this.component.files[0];
    },
  },
  methods: {
    onAdded() {
      this.$emit('fileAdded', this.file);
    },
  },
  mounted() {
    this.value = this.$attrs.value;
    this.component = this.$refs.uploader;
  },
};
</script>
