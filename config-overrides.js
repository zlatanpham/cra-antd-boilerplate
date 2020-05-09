const { addReactRefresh } = require('customize-cra-react-refresh');
const {
  override,
  addPostcssPlugins,
  useEslintRc,
  useBabelRc,
  addBundleVisualizer,
  fixBabelImports,
  addLessLoader,
} = require('customize-cra');

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: 'css',
  }),
  +addLessLoader({
    lessOptions: {
      // If you are using less-loader@5 please spread the lessOptions to options directly
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    },
  }),
  useBabelRc(),
  useEslintRc(),
  addPostcssPlugins([require('tailwindcss')('./src/tailwind.config.js')]),
  process.env.REACT_APP_BUNDLE_VISUALIZER === 'true' && addBundleVisualizer(),
  addReactRefresh({ disableRefreshCheck: true }),
);
