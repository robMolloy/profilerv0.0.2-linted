<template>
  <q-page padding>
    <div class="wrapper q-pa-sm  q-mb-xl">
      <div class="row q-gutter-sm">
        <span
          v-for="n in 7"
          :key="`${n}`"
          class="item col"
        >
          {{ n }}
        </span>
      </div>
    </div>
    <div class="wrapper q-pa-sm">
      <div class="test q-gutter-sm">
        <span
          class="item"
          v-for="n in 7"
          :key="`${n}`"
        >
          {{ n }}
        </span>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.wrapper
  border: 1px solid black
  background: rgba(255,0,0,.1)

.test
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr))
  justify-content: space-between

.item
  background: rgba(0,0,255,.1)
  height: 300px
</style>
