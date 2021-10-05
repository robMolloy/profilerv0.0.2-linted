<template>
  <rm-form @submit="onSubmit">
    <rm-input
      v-model="formData.email"
      :rules="[email]"
      label="Email"
    />
    <rm-input
      v-model="formData.password"
      :rules="[required]"
      type="password"
      label="Password"
    />
    <rm-row-buttons>

      <rm-button-submit
        type="submit"
        color="primary"
        label="Submit"
      />
    </rm-row-buttons>

  </rm-form>
</template>

<script>
import { loginUser } from '../utils/firebase/firebaseUtils';
import { validations } from '../mixins/mixinValidations';

export default {
  name: 'form-login',
  mixins: [validations],

  data() {
    return {
      formData: {},
    };
  },
  methods: {
    onSubmit() {
      loginUser(this.formData);
    },
  },
};
</script>

<style>
</style>
