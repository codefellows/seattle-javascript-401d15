![cf](http://i.imgur.com/7v5ASc8.png) 07: HTTP and REST APIs
===

## HTTP Resources
* Skim [Nodejs http module]
* Skim [Wiki list of header fields]
* Read [What is a rest api?]

## Learning Objectives
* Students will be able to identify qualities of the HTTP protocol
* Students will be able to implement an HTTP server using Nodejs
* Students will be able to explain what a HTTP RESTful is

## Overview
#### HTTP
* **HTTP** stands for hyper text transport protocol
* a stateless `request/response` protocol in the `client/server` computing model
* HTTP requests have
 * **METHOD** - used to indicate the type of action preformed on the resource
 * **URL** - used to indicate which resource to affect
 * **HTTP VERSION** - usually `HTTP/1.1`
 * **HEADERS** - used for optional request configuration
 * **MESSAGE BODY** - used with some **METHODS** to pass data to the server

* HTTP responses have
 * **HTTP VERSION** - usually `HTTP/1.1`
 * **STATUS CODE** - a number to indicate the requests success
 * **STATUS MESSAGE** - a name associated with the **STATUS CODE**
 * **HEADERS** - used for optional responses configuration
 * **MESSAGE BODY** - used to pass data back to the client

* **HTTP Status Codes**
  * _note: the following list showcases some of the more common status codes - this is **not** the entire list_

  * **100 - Informational**
    * 100 - continue

  * **200 - Success**
    * 200 - ok
    * 201 - created
    * 202 - accepted
    * 204 - no content

  * **300 - Redirection**
    * 300 - multiple choices
    * 301 - moved permanently
    * 302 - found
    * 304 - not modified
    * 308 - permanent redirect

  * **400 - Client Error**
    * 400 - bad request
    * 401 - unauthorized
    * 402 - payment required
    * 403 - forbidden
    * 404 - not found

  * **500 - Server Error**
    * 500 - internal server error
    * 501 - not implemented
    * 502 - bad gateway
    * 503 - service unavailable

#### REST
* uniform interface
 * resources are identified by urls
 * actions are identified by methods
* stateless
 * the client and server to not maintain a connection for longer than request/response
* cacheable
 * responses must implicitly or explicitly define themselves as cacheable
* client-server
 * using client server architecture for thoughtfully dividing separation of concerns
 * servers store data
 * clients maintain user state and create the user interface
* layered system
 * clients can not tell how the backend is implemented
 * the server could be one server or it could be 1000, but the interface is the same

## HTTP Servers
  * **Overview**
    * to demonstrate the concepts of how a modern REST API is created, we are going to create a vanilla NodeJS HTTP server with simple GET and POST interactions
    * in addition to the server, we'll be building a vanilla body parsing module that is used to parse JSON based requests
    * our server will be using the native NodeJS `http`, `fs`, `url`, and `querystring` modules
    * _remember:_ the WRRC (web request response cycle) revolves around making a request to a server and the server providing a response
      * we'll be using `req` and `res` objects to access information about the request and the response
        * _note:_ `req` and `res` are just naming conventions (best practice is to use these conventions)

<!--links -->
[Nodejs http module]: https://nodejs.org/api/http.html
[What is a rest api?]: https://medium.com/@lazlojuly/what-is-a-restful-api-fabb8dc2afeb#.nm7uiiltt
[Wiki list of header fields]: https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields
