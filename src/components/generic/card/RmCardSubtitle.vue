<template>
  <div class="row items-center q-pa-sm bg-primary text-white full-width">
    <q-toolbar-title class="full-width">
      <slot></slot>
    </q-toolbar-title>
    <q-space />
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'rm-card-subtitle',
};
</script>
