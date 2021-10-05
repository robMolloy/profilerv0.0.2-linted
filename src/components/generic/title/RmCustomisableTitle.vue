<template>
  <div class="row items-center q-pa-sm bg-primary text-white">
    <q-toolbar-title :class="titleClass" :style="titleStyle">
      <slot name="title"></slot>
    </q-toolbar-title>
    <q-space />
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'RmCustomisableTitle',
  props: {
    titleType: {
      type: String,
      default: () => 'title',
      // required: true
      // validator: function(value) {
      //   return ["title", "warning", "danger"].indexOf(value) !== -1;
      // }
    },
  },
  computed: {
    titleClass() {
      const classes = {
        subtitle: '',
      };

      const titleClass = classes[this.titleType];
      return titleClass ?? '';
    },
    titleStyle() {
      const styles = {
        title: 'text-transform:capitalize',
        subtitle: '',
        text: '',
      };

      const titleStyle = styles[this.titleType];
      return titleStyle ?? '';
    },
  },
  mounted() {
    console.log(/* LL */ 46, 'this.type', this.titleType);
  },
};
</script>
