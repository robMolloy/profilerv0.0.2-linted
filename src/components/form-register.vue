<template>
  <rm-form @submit="onSubmit">
    <rm-input
      v-model="formData.firstName"
      label="First Name"
      :rules="[required]"
    />
    <rm-input
      v-model="formData.lastName"
      :rules="[required]"
      label="Last Name"
    />
    <rm-input
      v-model="formData.email"
      :rules="[email]"
      label="Email"
    />
    <rm-input
      v-model="confirmEmail"
      :rules="[match.bind(this,formData.email, $t('fields.email'))]"
      :label="$t('fields.confirmEmail')"
    />
    <rm-input
      v-model="formData.password"
      :rules="[required]"
      label="Password"
      type="password"
    />
    <rm-input
      v-model="confirmPassword"
      :rules="[match.bind(this,formData.password, $t('fields.password'))]"
      :label="$t('fields.confirmPassword')"
      type="password"
    />

    <rm-row-buttons>

      <rm-button-submit
        type="submit"
        color="primary"
        label="Register"
      />
    </rm-row-buttons>

  </rm-form>
</template>

<script>
import { registerUser } from '../utils/firebase/firebaseUtils';
import { validations } from '../mixins/mixinValidations';

export default {
  mixins: [validations],

  data() {
    return {
      formData: {},
      confirmEmail: '',
      confirmPassword: '',
    };
  },
  methods: {
    onSubmit() {
      registerUser(this.formData);
    },
  },
};
</script>

<style>
</style>
