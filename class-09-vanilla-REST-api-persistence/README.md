![cf](http://i.imgur.com/7v5ASc8.png) 09: Vanilla REST API with Persistence
=====================================

## Persistence
  * **Overview**
    * today, we are refactoring our vanilla REST API to include a layer of file system persistence
     * in computer science, persistence refers to objects and processes that continue to exist even after that process ends or the machine running it is turned off
    * in addition to including a layer of persistence, we will create a response module to handle JSON and text based responses from our API
    
    * **in-memory persistence** - data only persists when the server is running
      * yesterday, we created a storage module to let us get and create new resources
        * the storage module is able to persist data by adding properties to a `storage` object
    
    * **file system persistence** - data persists on the file system
      * today, we will refactor our `storage` module to persist our API data in a `/data/resource` directory
      * while file system persistence layers offer a way of persisting data when the server is no longer running, this type of persistence can cause issues with scalability, speed, performance, and most importantly - security
    
    * **database persistence** - data persists on a database
      * starting next week, we'll be using `mongoDB` as our database management system (DBMS)
      * `mongoDB` uses document based storage and doesn't require the use of SQL (structured query language)
      * a few popular SQL based database management systems include:
        * **mySQL**
        * **PostgreSQL**
        * **SQL Server**
        * **SQLite**
    * **demo:** vanilla rest api with file system persistence, custom response module, and general refactoring
      * [vanilla-rest-api-persistence](/09-vanilla_rest_api_persistence/demo/vanilla-rest-api-persistence)

## Vanilla REST API with File System Persistence Visualization
  ![visualization](https://s3-us-west-2.amazonaws.com/s.cdpn.io/154088/vanilla-rest-api-with-persistence.png)

