const webpackMerge = require("webpack-merge");

const applyPresets = env => {
    const { presets } = env;
    if (presets === undefined) return;
    const mergePresets = [].concat(...[presets]);
    const mergedConfigs = mergePresets.map(
        presetName => require(`./webpack.${presetName}`)(env)
    );

    return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;