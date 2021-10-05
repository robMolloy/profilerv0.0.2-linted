<template>
  <q-page padding>
    <div>parentValue: {{ parentValue }}</div>
    <sync-test-child
      :options="options"
      @input="parentValue=$event"
      :value="parentValue"
    />
    <!-- @input="(event)=>{parentValue = event}" -->
  </q-page>
</template>

<script>
import SyncTestChild from './SyncTestChild.vue';

export default {
  components: { SyncTestChild },
  data: () => ({
    console,
    parentValue: 'Apple',
    options: [
      '',
      'Apple',
      'Banana',
      'Blueberry',
      'Kiwi',
      'Pear',
      'Pineapple',
      'Watermelon',
    ],
  }),
};
</script>

<style>
</style>
