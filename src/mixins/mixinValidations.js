// val always passed as the last parameter to allow use of bind in rules
// tests (return Boolean) start with is... to reduce mixin conflicts

export const validations = {
  methods: {
    isRequired(val) {
      return !!val;
    },
    required(val) {
      return this.isRequired(val) || this.$t('errors.required');
    },

    // isNumber more appropriate than invalidNumber - the rule is that it IS a number
    isNumber(val) {
      return val.match(/^-?\d*(\.\d+)?$/);
    },
    number(val) {
      return this.isNumber(val) || this.$t('errors.invalidNumber');
    },

    isMatch(testString, val) {
      return testString === val;
    },
    match(testString, label, val) {
      return (
        this.isMatch(testString, val) || this.$t('errors.notAMatch', [label])
      );
    },

    isEmail(val) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(val);
    },
    email(val) {
      return this.isEmail(val) || this.$t('errors.invalidEmail');
    },

    isValidPassword(val = '', length = 7) {
      let valid = true;
      if (val.length < length) valid = false;

      return valid;
    },
    validPassword(val = '', length = 7) {
      return (
        this.isValidPassword(val, length)
        || this.$t('errors.invalidPassword', [length])
      );
    },

    isMinLength(length, val) {
      return val.length >= length;
    },
    minLength(length, val) {
      return (
        this.isMinLength(length, val) || this.$t('errors.minLength', [length])
      );
    },
  },
};
