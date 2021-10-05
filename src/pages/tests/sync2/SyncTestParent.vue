<template>
  <q-page padding>
    <q-btn @click="parentValue--">p-</q-btn>
    <q-btn @click="parentValue++">p+</q-btn>
    <div>parentValue: {{ parentValue }}</div>
    <h3>_</h3>
    <sync-test-child v-model="parentValue" />
    <!--
      @input="parentValue = $event"
      :parentValue="parentValue"
    -->
  </q-page>
</template>

<script>
import SyncTestChild from './SyncTestChild.vue';

export default {
  components: { SyncTestChild },
  data: () => ({
    parentValue: 0,
  }),
};
</script>
