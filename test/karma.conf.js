

// karma.conf.js
module.exports = function(config) {
  config.set({
    // global config for SauceLabs
    sauceLabs: {
      username: 'sheff555',
      accessKey: 'd04372cc-0fc3-4e59-aa02-3cfd9df03240',
      startConnect: false,
      testName: 'my unit tests'
    },

    // define SL browsers
    customLaunchers: {
      sl_chrome_linux: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'linux'
      }
    },

    browsers: ['sl_chrome_linux']
  });
};