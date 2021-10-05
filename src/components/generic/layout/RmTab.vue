<template>
  <q-tab :name="name">
    <slot></slot>
  </q-tab>
</template>

<script>
export default {
  name: 'rm-tab',
  props: {
    name: { default: () => '', required: true },
  },
};
</script>
