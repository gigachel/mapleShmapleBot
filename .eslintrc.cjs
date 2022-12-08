module.exports = {
    // export default {
    env: {
        node: true,
        es2020: true,
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
        sourceType: "module",
        requireConfigFile: false,
    },
    rules: {
        // "comma-dangle": ["error", "always-multiline"],
        semi: "warn", // обязательно ;
        "semi-spacing": ["error", { before: false, after: true }],
        indent: ["error", 4, { SwitchCase: 1 }],
        "space-infix-ops": "error", // отступы вокруг + - * / = и тд
        eqeqeq: "error", // обязательно === и !== (нельзя == и !=)
        curly: "error", // проверка шаблонов `${name}`
        "key-spacing": ["error", { mode: "strict" }], // оформление обЪекта
        "space-in-parens": ["error", "never"], // запрет отступов ( a,b)
        "computed-property-spacing": ["error", "never"], // запрет лишних отступов в выражениях a[ i]
        "array-bracket-spacing": ["error", "never"],
        "no-multi-spaces": "error", // запрет лишних пробелов var a   = 2
        "no-sparse-arrays": "warn", // предупреждение при дырке в массиве
        "no-mixed-spaces-and-tabs": "error", // нельзя миксовать табы и пробелы
        "keyword-spacing": ["error", { after: true }],
        "comma-spacing": ["error", { before: false, after: true }], // отступ после запятой, а перед нельзя
        "no-undef": "error",
        "array-callback-return": "error", // коллбек методов массива типа arr.map arr.filter должны иметь return в коллбеке
    },
    globals: {},
    plugins: [],
};
