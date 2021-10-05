<template>
  <q-btn
    @click="$emit('click')"
    :color="color"
    :label="label"
    :type="type"
  />
</template>

<script>
export default {
  name: 'rm-button-color',
  props: {
    label: { default: () => '' },
    color: { default: () => 'primary' },
    type: { default: () => '' },
  },
};
</script>
