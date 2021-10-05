<template>
  <q-input
    v-model="value"
    @input="onInput"
    @keypress="onKeyPress"
    @validate="onValidate"
    :type="type"
    :label="label"
    :rules="rules"
    :hint="hint"
    :outlined="outlined"
    :class="className"
    :bottom-slots="bottomSlots"
    :autocomplete="autocomplete"
    :lazy-rules="lazyRules"
  >

    <template v-slot:after>
      <slot name="after"></slot>
    </template>

    <template v-slot:append>
      <slot name="append"></slot>
    </template>
  </q-input>
</template>

<script>
export default {
  name: 'RmInput',
  props: {
    type: { default: () => 'text' },
    rules: { default: () => [] },
    hint: { default: () => '' },
    label: { default: () => '' },
    outlined: { default: () => true },
    className: { default: () => 'q-mb-sm' },
    bottomSlots: { default: () => true },
    autocomplete: { default: () => '' },
    lazyRules: { default: () => true },
  },
  data() {
    return { value: '', listeners: {} };
  },
  methods: {
    onValidate() {
      return this.$refs.input.validate();
    },
    onInput(e) {
      const listener = this.$listeners.input;
      if (listener) listener(e);
      this.$emit('input', this.value);
    },
    onKeyPress(e) {
      const listener = this.$listeners.keypress;
      if (listener) listener(e);
    },
  },
  mounted() {
    this.value = this.$attrs.value;
  },
};
</script>

<style>
</style>
