let presets = [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-flow',
];

let plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-transform-async-to-generator',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta',
  '@babel/plugin-proposal-json-strings',
	['@babel/plugin-proposal-decorators', { legacy: true }]
];

if (process.env['ENV'] === 'test') {
  plugins.push('@babel/plugin-transform-modules-commonjs');
  plugins.push('dynamic-import-node');
}

module.exports = { presets, plugins };
