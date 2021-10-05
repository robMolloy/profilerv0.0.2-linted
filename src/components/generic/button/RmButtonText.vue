<template>
  <q-btn
    @click="$emit('click')"
    :color="color"
    :label="label"
    flat
  />
</template>

<script>
export default {
  name: 'rm-button-text',
  props: {
    label: { default: () => '' },
    color: { default: () => 'primary' },
  },
};
</script>
