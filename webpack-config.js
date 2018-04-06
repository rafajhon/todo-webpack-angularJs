const path = require('path');
module.exports = {
    context: __dirname + '/app',
    entry: './src/app.js',
    output :{
        path: path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    }
    };
