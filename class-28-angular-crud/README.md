![cf](http://i.imgur.com/7v5ASc8.png) 28: Angular CRUD
=====================================

## CRUD Services
  * **Overview**
    * we'll be using angular services to create libraries that allow for RESTful CRUD operations against the `slugram` backend application
    * in order to gain access to a user's token, we'll need to inject our custom auth service into a series of CRUD services
    * CRUD services can maintain state if needed
      * example: if a gallery service is used to gather all of a users galleries, it may store them on the service itself - this is highly useful as many controllers are going to need to access the list of return gallery data

## MIME Types (Review)
  * **Overview**
    * **MIME** was originally created to provide emails with the ability to send non-text attachments
    * the specification on **MIME** has been adapted by **HTTP** to enable `http` clients and servers with the ability to pass non-text data

  * **Common MIME Types**
    * `text/plain`
    * `text/javascript`
    * `application/json`
    * `image/jpeg`
    * `image/gif`
    * `audio/mpeg`
    * `audio/basic`
