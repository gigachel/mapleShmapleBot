import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

// const js = require("@eslint/js");
// const pluginVue = require('eslint-plugin-vue')
// const eslintConfigPrettier = require("eslint-config-prettier");
// const globals = require('globals');

// module.exports = {
//   extends: ["eslint:recommended", "plugin:vue/recommended", "prettier"],
//   env: {
//     browser: true,
//     node: true,
//     es2020: true,
//   },
//   parserOptions: {
//     sourceType: "module",
//   },
//   rules: {
//     "vue/multi-word-component-names": [
//       "error",
//       {
//         ignores: ["index"],
//       },
//     ],
//   },
//   globals: { $: true },
//   plugins: [],
// };

// module.exports = [
//   js.configs.recommended,
//   ...pluginVue.configs['flat/recommended'],
//   eslintConfigPrettier
// ]

export default [
  js.configs.recommended,

  eslintConfigPrettier,

  eslintPluginPrettierRecommended,

  {
    languageOptions: {
      // ecmaVersion: 2022, // default: "latest"
      sourceType: "module",
      globals: {
        // ...globals.browser,
        ...globals.node,
      },
    },
    rules: {},
  },
];
