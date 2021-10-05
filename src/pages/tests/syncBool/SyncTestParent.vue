<template>
  <q-page padding>
    <range-selector v-model="parentValue" />
  </q-page>
</template>

<script>
import RangeSelector from '../../../components/generic/form/RmRangeSelector.vue';

export default {
  components: { RangeSelector },
  data() {
    return { parentValue: [{ start: 56, end: 78 }] };
  },
};
</script>

<style>
</style>
