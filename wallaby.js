module.exports = function (wallaby) {

  return {
    files: [
      'tsconfig.json',
      'src/**/*.ts',
      'test/**/*.ts',
      '!test/unit/**/*.spec.ts',
      '!test/e2e/**',
    ],

    tests: [
      'test/unit/**/*.spec.ts',
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs'
      })
    },

    preprocessors: {
      '**/*.js?(x)': file =>
        require('@babel/core').transform(file.content, {
          sourceMap: true,
          compact: false,
          filename: file.path,
          presets: [require('babel-preset-jest')]
        })
    },

    testFramework: 'jest'
  };
};
