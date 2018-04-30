const path = require('path');
const port = 9300;

const config = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port,
        https: true,
        contentBase: './dist',
        historyApiFallback: true
    }
};

module.exports = config;