<template>
  <q-page-sticky
    @click="$emit('click')"
    :position="position"
    :offset="offset"
  >
    <q-btn
      :icon="icon"
      :color="color"
      fab
    />
  </q-page-sticky>
</template>

<script>
export default {
  name: 'rm-icon-sticky',
  props: {
    position: { default: () => 'bottom-right' },
    offset: { default: () => [18, 18] },
    color: { default: () => 'dark' },
    icon: { required: true },
  },
};
</script>
