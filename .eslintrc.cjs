module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "vue-eslint-parser",
    extends: [
        'eslint-config-prettier',
        'eslint:recommended', // 使用推荐的eslint
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended', // 使用插件支持vue3
        'plugin:vue/vue3-essential',
        //1.继承.prettierrc.js文件规则  2.开启rules的 "prettier/prettier": "error"  3.eslint fix的同时执行prettier格式化
        'plugin:prettier/recommended',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "project": ['./tsconfig.json'],
                "sourceType": "script",
                "extraFileExtensions": ['.vue']
            }
        },
    ],
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module",
        "extraFileExtensions": ['.vue']
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
}
