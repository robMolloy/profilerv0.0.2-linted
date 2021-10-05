<template>
  <q-page padding>
    <q-card style="max-width:400px; margin:0 auto;">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab
          name="login"
          label="Login"
        />
        <q-tab
          name="register"
          label="Register"
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels
        v-model="tab"
        animated
      >
        <q-tab-panel name="login">
          <form-login />
        </q-tab-panel>

        <q-tab-panel name="register">
          <form-register />
        </q-tab-panel>

      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import FormRegister from 'src/components/form-register.vue';
import FormLogin from 'src/components/form-login.vue';

export default {
  name: 'PageAuth',
  components: { FormRegister, FormLogin },
  data() {
    return {
      tab: 'login',
    };
  },
};
</script>

<style>
</style>
