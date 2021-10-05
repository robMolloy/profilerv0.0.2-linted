<template>
  <q-form
    @submit="$emit('submit')"
    :greedy="greedy"
  >
    <slot></slot>
  </q-form>
</template>

<script>
export default {
  name: 'rm-form',
  props: { greedy: { default: () => true } },
  data() {
    return {
      mounted: false,
    };
  },

  mounted() {
    this.mounted = true;
  },
};
</script>

<style>
</style>
