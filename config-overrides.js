const { addReactRefresh } = require('customize-cra-react-refresh');
const {
  override,
  addPostcssPlugins,
  useEslintRc,
  useBabelRc,
  addBundleVisualizer,
} = require('customize-cra');

module.exports = override(
  useBabelRc(),
  useEslintRc(),
  addPostcssPlugins([require('tailwindcss')('./src/tailwind.config.js')]),
  process.env.REACT_APP_BUNDLE_VISUALIZER === 'true' && addBundleVisualizer(),
  addReactRefresh({ disableRefreshCheck: true }),
);
