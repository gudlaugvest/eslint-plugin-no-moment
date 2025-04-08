import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import noMomentPlugin from "./index.js";

export default [
  {
    ignores: ["node_modules/**"],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    }
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser
      },
    },
    plugins: {
      noMoment: noMomentPlugin
    },
    rules: {
      'noMoment/no-moment': 'error'
    }
  }
];