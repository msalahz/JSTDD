module.exports = function(wallaby) {
  return {
    files: [
      { pattern: 'node_modules/chai/chai.js', instrument: false },
      { pattern: 'src/**/*.js' }
    ],

    tests: [
      '*.test.js'
    ],

    testFramework: 'mocha',

    env: {
      type: 'node'
    }
  };
};