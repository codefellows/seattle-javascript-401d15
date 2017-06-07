![cf](http://i.imgur.com/7v5ASc8.png) 31: Image Uploads
=====================================

## Daily Plan
* Notes:
  * feedback from surveys
  * Projects

* Hash Table [code demo]
* ng-animate (animations!)
  * ng-touch (mobile touch support / functionality)
* Uploading images using ng-file-upload [code demo]

## Image Uploads
  * **Overview**
    * unlike most of our previous requests, file uploads require a `Content-Type` of `multipart/form-data`
    * this gives us the ability to upload images and other file types
    * angular does not support `input` tags with a `type="file"`, therefor we will be using a 3rd party module to allow our app to have this functionality
    * `ng-file-upload` is a 3rd party module that comes with special helper directives and services to upload files
    * `ng-file-upload` supports single file uploads, multiple file uploads, drag and drop capabilities, and basic file type validation


## .env for Slugram backend
* Don't forget to add a `.env` to this repo
   ```sh
   MONGODB_URI='mongodb://localhost/cfgram-backend'
   NODE_ENV='testing'
   APP_SECRET='coolsecret'
   PORT=3000
   AWS_BUCKET='my-cool-bucket'
   AWS_ACCESS_KEY_ID='access key id'
   AWS_SECRET_ACCESS_KEY='secret access key'
   ```
