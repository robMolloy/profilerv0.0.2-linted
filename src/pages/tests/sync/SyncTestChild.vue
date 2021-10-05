<template>
  <div>
    <div> childValue: {{ childValue }} </div>
    <select v-model="childValue">
      <option
        v-for="option in options"
        :value="option"
      >
        {{ option }}
      </option>
      <q-btn>clear</q-btn>
    </select>

  </div>
</template>

<script>
export default {
  props: {
    value: { required: true },
    options: { type: Array, required: true },
  },
  data: () => ({
    childValue: null,
  }),
  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        this.childValue = newValue;
      },
    },
    childValue: {
      handler(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
};
</script>

<style>
</style>
