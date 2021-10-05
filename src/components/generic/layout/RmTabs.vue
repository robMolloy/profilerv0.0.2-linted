<template>
  <div>
    <q-tabs
      ref="input"
      v-model="value"
      @input="$emit('input', value)"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      bordered
    >
      <slot></slot>
    </q-tabs>
    <q-separator />
  </div>
</template>

<script>
export default {
  name: 'rm-tabs',
  data() {
    return { value: '' };
  },
  mounted() {
    this.value = this.$attrs.value;
  },
};
</script>
