const path = require('path');

module.exports = {
    mode: 'development',
    context: __dirname + '/app',
    entry: './src/app.js',
    output :{
        path: path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: 'app'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: "html"
             },
            {
                test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
            }
      ]
  }
};
