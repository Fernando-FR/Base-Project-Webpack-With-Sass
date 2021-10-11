const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname,'src/js/index.js'),
    output: {
        filename: 'script.js',
        path: __dirname
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'style.css'
    })],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "sass-loader",
            ],
          },
        ],
      },
}