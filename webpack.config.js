const webpack = require('webpack');
// const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

const plugins = [
  // new GoogleFontsPlugin({
  //   fonts: [
  //     { family: 'Abel', variants: ['400', 'Italic'] },
  //     // { family: 'Exo2', variants: ['400', 'Italic'] },
  //     { family: 'Roboto', variants: ['400', '700italic'] },
  //   ],
  // }),
  // {
  //   test: /\.(ttf|eot|woff|woff2)$/,
  //   loader: 'file-loader',
  //   options: {
  //     name: 'fonts/[name].[ext]',
  //   },
  // },
  // {
  //   // Match woff2 in addition to patterns like .woff?v=1.1.1.
  //   test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
  //   use: 'url-loader',
  //   options: {
  //     // Limit at 50k. Above that it emits separate files
  //     limit: 50000,
  //     // url-loader sets mimetype if it's passed.
  //     // Without this it derives it from the file extension
  //     mimetype: 'application/font-woff',
  //     // Output below fonts directory
  //     name: './fonts/[name].[ext]',
  //   },
  // },
];
if (process.argv.indexOf('-p') === -1) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  );
}

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.(html|htm)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
  plugins,
};
