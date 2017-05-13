![cf](http://i.imgur.com/7v5ASc8.png) 23: Testing Angular Controllers
=====================================

## Testing Controllers
  * **Overview of Technologies**
    * `Karma` is a test runner for running tests against code that would normally be ran in a browser enviornment
    * `Jasmine` is a testing framework that uses BDD (behavior driven development) style naming conventions, similar to that of `mocha`
      * `Jasmine` also includes a built in assertion library that uses similar conventions to `chai`'s `expect` syntax and associated language chains
    * `angular-mocks` is a library that will be used to mock our angular code for testing

  * **Links**
    * [Getting Started with Karma](https://karma-runner.github.io/1.0/intro/how-it-works.html)
    * [Karma Configuration](https://karma-runner.github.io/latest/intro/configuration.html)
    * [Getting Started with Jasmine](https://jasmine.github.io/2.0/introduction.html)
    * [Angular Mocks](https://docs.angularjs.org/api/ngMock#!)

## Karma

  * **Example `karma.conf.js`**
  * **note:** the following `karma.conf.js` file was auto generated using the `karma init karma.conf.js` CLI helper - all comments have been removed for readability

    ``` javascript

    const webpackConfig = require('./webpack.config.js');
    delete webpackConfig.entry;

    module.exports = function(config) {
      config.set({
        webpack: webpackConfig,
        basePath: '',
        frameworks: ['jasmine'],
        files: [
          'test/**/*-test.js'
        ],
        exclude: [
        ],
        preprocessors: {
          'test/**/*-test.js': ['webpack']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
      });
    };
    ```
