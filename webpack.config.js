const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');


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
        new LiveReloadPlugin()
    ]
};
