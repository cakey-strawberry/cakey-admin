module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "commitlint.config.js",
    "lint-staged.config.js",
    "vite.config.ts",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "index",
          "unknown",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [["", "./public"]],
        extensions: [".js", ".jsx", "ts", "tsx"],
      },
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};
