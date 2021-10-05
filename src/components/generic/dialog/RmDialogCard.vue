<template>
  <q-card style="width:700px;max-width:80vw;">
    <rm-dialog-title>
      <slot name="title"></slot>
    </rm-dialog-title>
    <slot></slot>
  </q-card>
</template>

<script>
import RmCardTitle from '../card/RmCardTitle.vue';

export default {
  name: 'rm-dialog-card',
  components: {
    RmCardTitle,
  },
};
</script>
