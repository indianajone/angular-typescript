module.exports.resolve = {
        extensions: ['.ts']
};

module.exports.module = {
    rules: [{
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: ['ng-annotate-loader', 'ts-loader']
    }]
};
