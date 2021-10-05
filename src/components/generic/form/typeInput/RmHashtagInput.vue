<template>

  <q-select
    v-model="componentValue"
    @keypress="onInput"
    @keydown.ctrl="prevent"
    @keydown.alt="prevent"
    @keydown.meta="prevent"
    :label="label"
    :stack-label="false"
    use-input
    use-chips
    multiple
    hide-dropdown-icon
    input-debounce="0"
    new-value-mode="add-unique"
    bottom-slots
    outlined
    class="q-mb-sm"
    clearable
    :rules="[xItemsOrMore.bind(this, 1)]"
  >
    <template v-slot:selected-item="item">
      <q-chip
        @remove="removeHashtag(item.index);"
        removable
        dense
      >
        {{`#${item.opt}`}}
      </q-chip>
    </template>
  </q-select>
</template>

<script>
import { xItemsOrMore } from '../../../../utils/vueValid9/rules';

export default {
  name: 'RmHashtagInput',

  props: {
    label: { default: () => 'Hashtags' },
    value: { default: () => [] },
  },

  data: () => ({
    xItemsOrMore,
    componentValue: [],
  }),

  methods: {
    prevent(e) {
      e.preventDefault();
    },

    onInput(e) {
      const isLowerLetter = e.keyCode >= 65 && e.keyCode <= 90;
      const isUpperLetter = e.keyCode >= 97 && e.keyCode <= 122;

      const other = { backspace: 8 };
      const isOther = Object.values(other).includes(e.keyCode);

      if (!isLowerLetter && !isUpperLetter && !isOther) e.preventDefault();
    },

    removeHashtag(index) {
      this.componentValue.splice(index, 1);
    },
  },

  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this.componentValue = newValue;
      },
    },

    componentValue: {
      handler(newValue, oldValue) {
        this.$emit('input', newValue);
      },
    },
  },
};
</script>
