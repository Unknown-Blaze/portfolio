import js from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/", "node_modules/"] },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [...tseslint.configs.strictTypeChecked],
    languageOptions: {
      parserOptions: { project: ["./tsconfig.json", "./tsconfig.node.json"], tsconfigRootDir: import.meta.dirname },
    },
    rules: {
      // Template strings with numbers are the normal way to build labels here.
      "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
      // Arrow shorthands that return a void call (`() => setOpen(false)`) are the house style.
      "@typescript-eslint/no-confusing-void-expression": "off",
    },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [reactHooks.configs.flat.recommended, jsxA11y.flatConfigs.recommended],
    languageOptions: { globals: globals.browser },
    rules: {
      // Horizontally scrolling rails (<ul class="rail">) take tabIndex={0} on purpose so keyboard users can scroll them.
      "jsx-a11y/no-noninteractive-tabindex": [
        "error",
        { tags: ["ul"], roles: ["tabpanel"], allowExpressionValues: true },
      ],
    },
  },
  {
    files: ["scripts/**/*.mjs", "*.config.{js,ts}"],
    languageOptions: { globals: globals.node },
  },
);
