<template>
  <q-btn
    @click="$emit('click')"
    :color="color"
    :label="label"
    type="submit"
    :disable="disable"
  />
</template>

<script>
export default {
  name: 'rm-button-submit',
  props: {
    label: { default: () => 'Submit' },
    color: { default: () => 'primary' },
    disable: { default: () => false },
  },
};
</script>
