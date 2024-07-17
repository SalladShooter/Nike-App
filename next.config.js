const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.alias['@images'] = path.join(__dirname, 'src/assets/images');
    config.resolve.alias['@icons'] = path.join(__dirname, 'src/assets/icons');
    config.resolve.alias['@constants'] = path.join(__dirname, 'src/constants');

    return config;
  },
};