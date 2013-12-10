module.exports = function(config) {
  config.set({
    frameworks: ['mocha','chai'],
    browsers: ['Chrome', 'Firefox'],
    files: [
      'vendor/*.js',
      'src/*.js',
      'tests/*_test.js'
    ],
    client: {
      mocha: {
        ui: 'bdd'
      }
    }
  });
};
