const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
           new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'index.html'),
                filename: 'index.html',
            }),
    ],
    output: {
      filename: 'main.js',
    },

    stats: {
        children: false,
    },
  };