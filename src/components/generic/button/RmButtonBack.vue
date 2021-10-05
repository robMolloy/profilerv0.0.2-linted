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
  name: 'rm-button-back',
  props: {
    label: { default: () => 'back' },
    color: { default: () => 'primary' },
  },
};
</script>
