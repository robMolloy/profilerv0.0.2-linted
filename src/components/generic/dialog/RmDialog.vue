<template>

  <q-dialog
    v-model="childValue"
    persistent
  >
    <q-card style="width:500px">
      <rm-card-title>
        {{ title }}
      </rm-card-title>
      <slot></slot>
    </q-card>
  </q-dialog>

</template>

<script>
import RmCardTitle from '../card/RmCardTitle.vue';

export default {
  name: 'rm-dialog',
  props: {
    title: { required: true },
    value: { default: () => true },
  },
  components: {
    RmCardTitle,
  },
  data: () => ({
    childValue: false,
    console,
  }),
  methods: {
    toggle() {
      this.childValue = !this.childValue;
    },
  },
  watch: {
    value: {
      handler() {
        this.toggle();
      },
    },
  },
};
</script>
