var path = require('path');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'src/components/App.jsx'),
      './src/index.html'
    ],
    output: {
        filename: '/js/[name].js',
        path: __dirname + "/dist"
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },{
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }]
    }
};
