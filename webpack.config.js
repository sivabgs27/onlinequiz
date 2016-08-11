var webpack = require("webpack");

module.exports = {

    entry: {
        app: './client_side/app/main.js'
    },
    output: {
        filename: 'client_side/app/bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'}
        ]
    },
    resolve: {
        extensions: ['','js','ts']
    }

};
