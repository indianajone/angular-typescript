module.exports = {
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [],
    },
    plugins: []
};


module.exports.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    loader: ['ng-annotate-loader', 'ts-loader']
});
