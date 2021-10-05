<template>
  <rm-customisable-title titleType="fred">
    <template v-slot:title>
      add profile
    </template>
    <form-profile @success="$emit('success')" />
  </rm-customisable-title>
</template>

<script>
import formProfile from '../form/form-profile.vue';

export default {
  components: { formProfile },
  name: 'dialog-card-form-profile',
  data: () => ({}),
  methods: {
    onUpdate() {
      this.$emit('input', this.value);
    },
  },
  mounted() {},
};
</script>

<style>
</style>
