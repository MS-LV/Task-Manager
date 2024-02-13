module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
  ],
  rules: {
    "vue/no-ref-as-operand": "error",
    "vue/no-parsing-error": "error",
    "vue/no-reserved-component-names": "error",
    "vue/require-default-prop": "off",
    "vue/no-export-in-script-setup": "warn",
    "vue/no-shared-component-data": "error",
    "vue/no-side-effects-in-computed-properties": "error",
    "vue/no-template-key": "error",
    "vue/no-textarea-mustache": "error",
    "vue/no-use-computed-property-like-method": "error",
    "vue/no-useless-template-attributes": "error",
    "vue/require-component-is": "error",
    "vue/require-prop-type-constructor": "error",
    "vue/require-render-return": "error",
    "vue/require-v-for-key": "error",
    "vue/require-valid-default-prop": "error",
    "vue/return-in-emits-validator": "error",
    "vue/use-v-on-exact": "error",
    "vue/valid-attribute-name": "error",
    "vue/valid-define-emits": "error",
    "vue/valid-define-props": "error",

    "vue/no-unused-vars": [
      "error",
      {
        ignorePattern: "^_",
      },
    ],

    "vue/multi-word-component-names": "error",

    "vue/no-dupe-keys": [
      "error",
      {
        groups: [],
      },
    ],

    "vue/no-duplicate-attributes": [
      "error",
      {
        allowCoexistClass: true,
        allowCoexistStyle: true,
      },
    ],
    "vue/no-mutating-props": [
      "error",
      {
        shallowOnly: false,
      },
    ],
    "vue/no-reserved-keys": [
      "error",
      {
        reserved: [],
        groups: [],
      },
    ],
    "vue/no-reserved-props": [
      "error",
      {
        vueVersion: 3, // or 2
      },
    ],
    "vue/no-unused-components": [
      "error",
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    "vue/no-use-v-if-with-v-for": [
      "error",
      {
        allowUsingIterationVar: false,
      },
    ],
    "vue/no-v-text-v-html-on-component": [
      "error",
      { allow: ["router-link", "nuxt-link"] },
    ],
    "vue/return-in-computed-property": [
      "error",
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
  },
};
