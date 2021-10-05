<template>
  <q-page class="flex flex-center">
    <div>
      <h4>{{$t(`project.welcomeText`)}}</h4>
      <h3>{{$t(`project.name`)}}</h3>
      <q-btn @click="$router.push('/users')">get started</q-btn>
    </div>

  </q-page>
</template>

<script>
export default {};
</script>

<style>
</style>
