module.exports = {
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-flow-strip-types"
  ],
  presets: [
    "@babel/preset-env",
    "module:metro-react-native-babel-preset",
    "@babel/preset-react",
    "@babel/typescript"
  ]
};
