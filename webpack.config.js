const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetsConfig = require('./build-utils/presets/loadPresets');

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    return webpackMerge({
        mode,
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {   
                            loader: "file-loader"
                        }
                    ] 
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                      loader: "babel-loader"
                    }
                }
            ]
        },
        output: {
            filename: "bundle.js"
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './src/index.html' }),
            new webpack.ProgressPlugin()
        ]
    },
    modeConfig(mode),
    presetsConfig({ mode, presets })
    );
};