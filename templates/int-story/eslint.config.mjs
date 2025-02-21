import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  {
    ignores: ["**/dist/**", "**/.next/**", "**/.next.dev/**"],
  },
  ...compat.config({
    extends: ["next", "prettier"],
  }),
  {
    rules: {
      "no-console": "warn",
      "no-param-reassign": "off",
      "import/no-named-as-default": "off",
      "object-shorthand": ["error", "always"],
      "react-hooks/exhaustive-deps": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
];

export default eslintConfig;
