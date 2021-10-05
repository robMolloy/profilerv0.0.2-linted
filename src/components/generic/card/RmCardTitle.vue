<template>
  <rm-customisable-title>
    <template v-slot:title>
      <slot></slot>
    </template>

  </rm-customisable-title>
</template>

<script>
import RmCustomisableTitle from '../title/RmCustomisableTitle.vue';

export default {
  components: { RmCustomisableTitle },
  name: 'rm-card-title',
  props: {},
};
</script>
