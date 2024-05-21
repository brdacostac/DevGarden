module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      // Your other plugins
      'react-native-reanimated/plugin',
      '@babel/plugin-transform-export-namespace-from',
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }]
    ],
  };