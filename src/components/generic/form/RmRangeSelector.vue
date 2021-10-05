<template>
  <div>

    <!-- v-model="componentValue" -->
    <q-select
      ref="component"
      :value="componentValue"
      @new-value="onNewValue"
      multiple
      use-input
      use-chips
      hide-dropdown-icon
      input-debounce="0"
    />
  </div>
</template>

<script>
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';

const stringToRange = (str) => {
  const [start, end] = str.split('-');
  return { start, end };
};
const rangeToString = (range) => {
  const rangeArr = [range.start, range.end];
  return rangeArr.filter((x) => !!x).join('-');
};

const combineRanges = (arr) => {
  arr = cloneDeep(arr);
  sortRanges(arr);
  let currentRange = {};
  const newArray = [];
  arr.forEach((range) => {
    if (Object.values(currentRange).length === 0) return (currentRange = range);

    const { start: min, end: max } = currentRange;
    const { start: tempMin, end: tempMax } = range;
    const isOverlap = tempMin <= max;

    const isLarger = tempMax >= max;

    if (isOverlap && isLarger) currentRange.end = tempMax;
    if (!isOverlap) {
      newArray.push(currentRange);
      currentRange = range;
    }
  });

  if (Object.values(currentRange).length !== 0) newArray.push(currentRange);

  return newArray;
};

const sortRanges = (arr) => {
  arr.sort((range1, range2) => {
    const isSameStart = range1.start === range2.start;

    if (isSameStart) return range1.end > range2.end ? -1 : 1;
    return range1.start < range2.start ? -1 : 1;
  });
};

export default {
  name: 'RmRangeSelector',

  props: {
    value: { required: true },
  },

  data() {
    return {
      childValue: [],
    };
  },

  methods: {
    onNewValue(range, push) {
      const errors = this.getRangeErrors(range);
      const success = errors.length === 0;

      if (success) this.addCurrentRange();
    },

    addCurrentRange() {
      const string = this.component.inputValue;
      this.component.inputValue = '';
      return this.childValue.push(stringToRange(string));
    },

    getRangeErrors() {
      return [];
    },

    setInputValue(value) {
      this.component.inputValue = value;
    },
  },

  computed: {
    component() {
      return this.$refs.component;
    },

    componentValue() {
      return this.childValue.map(rangeToString);
    },

    inputValue() {
      return this.component.inputValue;
    },
  },

  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this.childValue = combineRanges(newValue);
      },
    },

    childValue: {
      immediate: true,
      handler(newValue, oldValue) {
        if (!isEqual(newValue, oldValue)) this.$emit('input', newValue);
      },
    },
  },
};
</script>

<style>
</style>
