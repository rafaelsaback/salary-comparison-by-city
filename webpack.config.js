const path = require('path');

module.exports = {
    mode: 'development',
  entry: ['./src/index.js', './src/styles/main.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },

    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 4000,
        open: true
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(pdf|jpg|jpeg|png|gif|svg|ico)$/,
                use: ['url-loader']
            },
        ]
    },
};
