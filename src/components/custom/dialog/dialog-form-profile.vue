<template>
  <q-dialog
    v-model="value"
    @update="onUpdate"
  >
    <rm-dialog-card>
      <template v-slot:title>
        add profile
      </template>
      <form-profile @success="show=false" />
    </rm-dialog-card>
  </q-dialog>
</template>

<script>
import formProfile from '../form/form-profile.vue';

export default {
  components: { formProfile },
  name: 'dialog-form-profile',
  props: { show: { default: () => true } },
  data() {
    return {
      value: false,
    };
  },
  methods: {
    onUpdate() {
      this.$emit('input', this.value);
    },
  },
  mounted() {
    this.value = this.show;
  },
};
</script>

<style>
</style>
