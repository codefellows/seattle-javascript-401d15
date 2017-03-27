![cf](http://i.imgur.com/7v5ASc8.png) 17: Bearer Auth
=====================================

## Bearer Auth
  * **Overview**
    * using standard HTTP, we can use *bearer* auth tokens to access protected resources
    * this token is accessible on the `req.headers.authorization` property and can be split by the term **`Bearer `** to grab the associated token (much like we did with `Basic ` auth yesterday)
    * in our application, this token will used to provide a user with permissions to access specific routes of our choice (ex: `POST: /api/gallery` and `GET: /api/gallery/:id`)

  * **JWT (JSON Web Tokens)**
    * a **JWT** is the standard for securely transmitting information between parties as a JSON object
    * this information is secured through a digital signature
    * we'll be "signing" our **JWT's** through the use of an `APP_SECRET` that we will configure as part of our environment variables

    * **Benefits:**
      * **authentication** - once a user has logged in, each new request will include the JWT - allowing the user to access routes that are permitted with that token
      * **general information exchange** - JWT's are excellent at securely transmitting data between parties - this is often configured using a series of public/private key pairs

## CFGram Visualization
  ![visualization](https://s3-us-west-2.amazonaws.com/s.cdpn.io/154088/cfgram.png)
