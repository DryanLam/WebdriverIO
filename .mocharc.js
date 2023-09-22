module.exports = {
    spec: "tests/**/*.ts", // Specify the test files pattern.
    require: ["ts-node/register"], // Use if you need to transpile your code (e.g., with Babel).
    reporter: "spec", // You can choose different reporters (e.g., "nyan", "dot", etc.).
};