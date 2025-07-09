const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    // Define a loader whose goal is to tell Webpack to 
    // process some different files as we start to 
    // import them into our project.
    rules: [
      // Babel: process all of our code from the ES 2015, '16', '17' and so on
      // and turn it into regular ES5 code that could be easily executed 
      // inside of a typical browser
      {
        // What 'test' does is whenever we import in a file that 
        // ends with an extension of either .mjs or .js, 
        // we wanted it to be processed by babel
        test: /\.m?js$/,
        // Don't try to run babel on any file out of node modules directly
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};