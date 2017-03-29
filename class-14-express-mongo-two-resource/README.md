![cf](http://i.imgur.com/7v5ASc8.png) 14: MongoDB & Express Two Resource API
=====================================

## Working with Multiple Resources
  * **Overview**
    * most APIs contain a series of relationships that exist between resources
    * since we are *not* using a relational database system to persist our API data, we can create our own relationships through matching unique IDs
    * when saving an item to our **MongoDB** database, **MongoDB** will automatically generate a unique `_id` property for us
      * this property has a "data type" of `ObjectId` and can be used to create relationships between resources that specify the same id upon creation
    * example:
    ``` javascript

      const noteSchema = Schema({
        name: String,
        content: String,
        listID: Schema.Types.ObjectId // when creating a new note, we can assign the listID property as the same value as the `_id` property of a list
      });

    ```
    * `mongoose` also provides us with the ability to `populate` our resources with a connection to a related resource
    * population is handled through the use of the `populate()` method and will populate your resource with a connection to another resource by using it's schema name
      * example: `populate('notes')`
    * **demo:** **MongoDB** and **Express** two resource API

## 2 Resource API Visualization
 ![visualization](https://s3-us-west-2.amazonaws.com/s.cdpn.io/154088/expressmongomap.png)
