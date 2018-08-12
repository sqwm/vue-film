// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    "indent": 0, //缩进分格
    "no-eval": "warn",//禁止出现eval
    "no-implied-eval": "warn",
    "no-const-assign": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",//不能有无法执行的代码
    "no-unused-vars": "warn",//不能有声明后未被使用的变量或参数
    "no-use-before-define": "error",//未定义前不能使用
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": 0,
    "key-spacing": 0,
    "spaced-comment": 0
  }
}
