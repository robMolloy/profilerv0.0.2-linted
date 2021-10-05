<template>
  <rm-card-title>
    <slot></slot>

    <template v-slot:right>
      <q-btn
        padding="none"
        icon="close"
        flat
        dense
        v-close-popup
      />
    </template>
  </rm-card-title>
</template>

<script>
import RmCardTitle from '../card/RmCardTitle.vue';

export default {
  components: { RmCardTitle },
  name: 'rm-card-title',
};
</script>
