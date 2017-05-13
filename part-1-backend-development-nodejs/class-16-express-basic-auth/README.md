![cf](http://i.imgur.com/7v5ASc8.png) 16: Basic Auth
=====================================

## Daily Plan
* Lightning Talks

* Notes:
  *

* High level review of this week! CF-Gram!!
  * Monday - Basic Auth & CI
  * Tuesday - Bearer Auth
  * Wednesday - AWS S3 Storage
  * Thursday - Heroku Deployment & Pipelines
  * Friday - Project kick-off!!

* Continuous Integration
  * TravisCI Intro (review...)
  * CoverAlls for test coverage

* Authorization
  * General Overview
  * Password hashing - what is this devilry?
  * Reminder:
    * To Store a Password
      - Generate a long random salt using a CSPRNG. (Cryptographically Secure Pseudo-Random Number Generator)
      - Prepend the salt to the password and hash it with a standard password hashing function like Argon2, bcrypt, scrypt, or PBKDF2.
      - Save both the salt and the hash in the user's database record.

    * To Validate a Password
      - Retrieve the user's salt and hash from the database.
      - Prepend the salt to the given password and hash it using the same hash function.
      - Compare the hash of the given password with the hash from the database. If they match, the password is correct.
      - Otherwise, the password is incorrect.

* CF-Gram Introduction
  * Live Code & Review Project Scaffold (live code)
  * Basic Authentication (live code)
    * Sign-in & Sign-up

## CI Resources
* Read [TravisCI]

## Continuous Integration (CI)
  * **Overview**
    * CI is the concept of merging new code into a collaborative repository multiple times a day
    * CI tools provide us with a basic level of build automation and software quality management (SQM) - this is done by:
      * running our build processes
      * checking to ensure our build is working
      * checking to ensure that all of our tests have passed

  * **TravisCI**
    * [TravisCI](www.travisci.org) is an easy to use, highly configurable CI tool
    * to enable a new repository to work with TravisCI, you simply need to:
      * create an account with TravisCI
      * enable the repository(s) you wish to use
      * create a `.travis.yml` file, which is used to configure a build **(see example file below)**
      * each time a new PR is made, TravisCI will run and provide the build status to ensure all checks have passed *(using the built in TravisCI widget on GitHub)*

  * **Example: `.travis.yml`**
    ``` javascript
      language: node_js
      node_js:
        - 'stable'
      services:
        - mongodb
      addons:
        apt:
          sources:
            - ubuntu-toolchain-r-test
          packages:
            - gcc-5
            - g++-5
      env:
        - CXX=g++-5
      sudo: required
      after_success:
        - npm run coveralls
      before_script: npm i
      script:
        - npm run test
    ```

## Authorization & Authentication
  * **Authorization**
    * **authorization** refers to *user permissions*
      * we'll be using authorization to verify access to use our application

  * **Authentication**
    * **authentication** refers to *who you are*
      * think of authentication as a user *login* and *password*

  * **Basic Authentication Scheme**
    * basic access authentication is used when a user provides a username and password over HTTP
    * basic auth provides **no real significant protection** as the credentials are sent through the HTTP headers when making a request
    * the `req.headers.authorization` header property provides us with a standard base64 encoded string that is prepended with `Basic `
    * upon splitting off the end of the `Basic ` base64 string, we can transform this into a UTF-8 string and grab the username and password as they are now available and split with a `:`
      * ex: `username:password`

  * **demo:** basic auth demo & start of `CFgram` application build out

<!-- links -->
[TravisCI]: https://docs.travis-ci.com/user/languages/javascript-with-nodejs/
