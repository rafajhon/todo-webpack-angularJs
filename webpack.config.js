const path = require('path');
var webpack = require('webpack');

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
    plugins: [
        new webpack.ProvidePlugin({
          'jQuery': 'jquery',
          'window.jQuery': 'jquery'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: "css-loader",
                    },

                    {
                        loader: 'sass-loader',
                    },
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf|png|jpeg|gif)$/,
                loader: 'file-loader?name=webpack_content/[hash].[ext]'
            },
      ]
  }
};
