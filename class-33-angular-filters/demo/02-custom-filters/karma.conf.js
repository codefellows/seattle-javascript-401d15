'use strict'

const webpack = require('./webpack.config.js')
delete webpack.entry

module.exports = function(config) {
  config.set({
    webpack,
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/entry.js',
      'test/**/*-test.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'app/entry.js': ['webpack'],
      'test/**/*-test.js': ['webpack', 'coverage']
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_DISABLE,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
