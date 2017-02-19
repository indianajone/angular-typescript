let config = {
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [],
    },
    plugins: []
};


config.module.rules.push({
    test: /\.ts$/,
    exclude: /(node_modules|bower_components)/,
    loader: ['ng-annotate-loader', 'ts-loader']
});

config.module.rules.push({
    test: /\.html$/,
    loader: 'html-loader'
});

module.exports = config;
