<template>
  <div class="row justify-center q-col-gutter-lg">
    <div
      class="col-xs-12 col-sm-6 col-md-3 col-lg-2"
      v-for="post in posts"
      :key="post.id"
    >
      <card-post :post="post" />
    </div>
  </div>
</template>

<script>
import CardPost from 'src/components/card-profile.vue';

export default {
  components: { CardPost },
  props: ['posts'],
};
</script>
