<template>
  <q-tab-panels
    ref="input"
    v-model="value"
    @input="onInput"
    @click="onClick"
    animated
  >
    <slot></slot>
  </q-tab-panels>
</template>

<script>
export default {
  name: 'rm-tab-panels',
  data() {
    return { value: '', console };
  },
  methods: {
    onClick() {
      console.log(/* LL */ 0, 'this', this);
    },
    onInput() {
      console.log(/* LL */ 20, '123', 123);
      this.$emit('input', value);
    },
  },
  mounted() {
    // TODO rm-tab-panels not working
    console.error('rm-tab-panels not working');
    this.value = this.$attrs.value;
  },
};
</script>
