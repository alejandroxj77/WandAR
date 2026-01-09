const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

config.resolver.assetExts.push('gltf', 'glb', 'bin', 'obj', 'mp4');

module.exports = config;



