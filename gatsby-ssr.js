/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

require('source-map-support').install();
require('@babel/register')({
  extensions: ['.js', '.ts', '.tsx', '.jsx'],
  presets: [
    [
      require.resolve('@babel/preset-typescript'),
      { isTSX: true, allExtensions: true },
    ],
  ],
});

const ThemeContext = require('./src/context/theme/index.tsx');

export const wrapRootElement = ThemeContext.ThemeWrapper;