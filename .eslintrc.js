module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:codeceptjs/recommended"],
  parserOptions: {
    ecmaVersion: 11,
  },
  // Сюда добавляем правила для чистоты кода
  rules: { "codeceptjs/no-pause-in-scenario"
  },
};
