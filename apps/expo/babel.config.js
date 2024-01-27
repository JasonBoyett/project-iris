module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin"
    ],
    presets: [
      "module:metro-react-native-babel-preset"
    ],
  };
};
