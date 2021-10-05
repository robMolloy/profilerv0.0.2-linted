<template>
  <div>
    <q-separator />
    <q-card-actions align="right">
      <div class="row justify-end q-gutter-sm">
        <slot></slot>
      </div>
    </q-card-actions>
  </div>
</template>

<script>
export default {
  name: 'rm-row-buttons',
  data() {
    return {
      mounted: false,
    };
  },

  mounted() {
    this.mounted = true;
  },
};
</script>

<style>
</style>
