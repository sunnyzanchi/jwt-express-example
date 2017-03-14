const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: 'public/js',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js',
      'normalize.css': 'normalize.css/normalize.css',
      Pages: path.join(__dirname, 'src/js/Pages'),
      Components: path.join(__dirname, 'src/js/Components')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
