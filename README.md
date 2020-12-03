# Introduction to MongoDB

Welcome to the README, where you will get to know about the basics of the very well known "M" in MERN or MEAN, i.e., the MongoDB

#### Prerequisite - Repo contains source code from the "The Complete Node.js Course" by the "Code With Mosh" author.

It will be great if you follow the course, but no worries, I have got you covered here with the knowledge that I learned from the author. Stick with README, which won't be length nor cryptic. I hope - we - both grasp something insightful from this. Let's jump in!

### WTH is MongoDB?

Ahh, there is this thing about tech - it never ceases to amaze you, isn't it? How we evolved from SQL database to NoSQL or Not SQL or Not SQL Database is something
to note for. Don't worry, I am not taking you back in time. My Point is to familiarize you with these two points here: SQL & NoSQL. 

#### Meet `SQL` -  
 A mechanism to operate or manipulate data that we store in our hardware kinds of stuff. SQL aka relational database means the database that stores data in tabular form.

#### Meet `NoSQL` - 
 A mechanism that deals with data in an anti SQL way. NoSQL, meaning, literally nothing sort of tabular relations. 
 It stores data in other formats including, a highly used [ Key - Value ] pair system ( JSON ), but it's not the only way it handles data. 
 It also uses other data structures such as `Wide-Column Store`, `Graph database` or be that `Document-Oriented Database`. 
 
Now you have that slightest idea of SQL & NoSQL, let's deep dive to know further linking of NoSQL & MongoDB.

`MongoDB` - NoSQL database programs which uses JSON-like documents with optional schemas. 
 Meaning that you can create records without first defining the structure, such as the fields or the types of their values.
 
That will be a short description on what is MongoDB. You can always dig deeper. But for now, we will keep that deep theory aside and will jump on programming part.
 
You can refer the mentioned doc on "How to setup mongoDB in your system". [Install MongoDB](https://docs.mongodb.com/manual/installation/).
After successful installation, you will have MongoShell & Mongod. By default, MongoDB starts at port 27017. 
We need this to connect Mongoose to our MongoDB service so that we can use database in our application.

`Mongoose` is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. More clearly, it's a JavaScript framework that is commonly used in a Node.js application with a MongoDB database.

Assuming that you have all your required setup running on your machine, let's work on code.

```javascript
const mongoose = require('mongoose')

mongoose.connect("mongodb://172.17.0.2:27017/playground", 
  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('successfully connected to mongodb'))
.catch((err) => { throw new Error("Oops an error", err) })
```
Not to afraid, it's just a few lines of code on connecting your mongoose to mongoDB driver. How? Let me explain

1. First, you import `mongoose` 
2. `mongoose.connect()` is a function which takes few parameters, which are, 
 
a) The `url` - "mongmongodb://172.17.0.2:27017/playground", which is nothing but "mongodb://localhost_address/db_name". That `mongodb://` is a starting point and you should not miss. Remeber that! 
 
b) Object `{ useNewUrlParser: true, useUnifiedTopology: true }` - These are parameters you need to pass to take down the `deprecation warnings` thrown by the compiler. You might get those warnings or might not, depending upon the `mongoose` & `MongoDB` version you are using.

While executing `mongoose.connect()` it will either throw an error or a successful connection message. To know what really happened in the hood, we use `.then()` & `.catch()` to display respective message.

#### Note - The url `mongodb://localhost_address/db_name`  where you have to specify db_name, not necessarily need to exist before. If that db_name is already there, then MongoDB will use that db else it will create a new db of that name. Making our lives simpler.

Considering that you have successfully connected to MongoDB driver with the help of mongoose. Let's learn how to create a schema for our database.

Before diving into schema creation, I will like to mention a few of the necessary terminology for MongoDB

1. Database - Same idea as of any SQL database. What differs is, SQL has tables & rows in their database, whereas MongoDB has collections.
2. Collection - It is equivalent to a table in an SQL database.
3. Document - SQL table has rows & columns. You guessed that right, MongoDB too has it's equivalent, named document. A document can be referred to as a SQL database row.
4. Field - A field in a document, is like a column in a row of data in SQL. 

So this is how the tree structure of MongoDB is - You have a Database, that database contains different collections where the collection is made up of a document & field.

#### Where is Schema then?

A document schema is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection. - MongoDB Guide

Meaning that, you are defining data structure or shape of a document i.e., what that document contains, a number, a string, or something else!

```javascript

const playSchema = new mongoose.Schema({
    nickname: String,
    hobby: String,
    job: String,
    date: { type: Date, default: Date.now },
    age: Number,
    bookie: Boolean,
    play: String,
    tags: [String]
})

```

Back to the code, here I am defining a schema named `playSchema` with the help of mongoose.Schema(). The object that has been passed to mongoose function is our schema structure. It defines a property in our documents which will be cast to its associated SchemaType.. Ex., nickname casts a String SchemaType, date to data SchemaType ( it's not object, date is one of schemaType ) or be that tags which casts an Array SchemType. These are some examples of built-in Mongoose Schema Types.

`Note` - Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.


