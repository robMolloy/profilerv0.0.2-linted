<template>
  <span
    :class="className"
    style="width:100%"
  >

    <q-card
      :flat="!mouseIn"
      @mouseenter="mouseIn = true"
      @mouseleave="mouseIn = false"
      bordered
      class="cursor-pointer"
    >

      <q-img
        :src="post.imageUrl"
        style="height: 200px;"
      >
        <div
          class="absolute-top-right row"
          @mouseenter="mouseInTopRight = true"
          @mouseleave="mouseInTopRight = false"
          style="padding: 5px;"
        >
          <span
            v-if="mouseInTopRight"
            class="column q-pr-md q-pl-sm "
          >
            <div class="text-h6 text-line-1">{{ post.company }}</div>
            <div class="text-line-1">{{ post.location }}</div>
          </span>
          <div class="col">
            <q-avatar size="40px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </div>

        </div>

      </q-img>

      <q-card-section>
        <div class="text-h6 text-line-1">{{ post.title }}</div>
        <div class="text-caption text-grey text-line-1">
          {{ post.hashtags.map((itm)=>`#${itm}`).join(' ') }}
        </div>
        <div class="q-mt-sm text-line-1">
          {{ post.description }}
        </div>
      </q-card-section>
    </q-card>

  </span>

</template>

<script>
export default {
  props: ['post', 'className'],
  data() {
    return {
      mouseInTopRight: false,
      mouseIn: false,
    };
  },
};
</script>

<style>
</style>
