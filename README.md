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

#

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

#

#### What is Schema then?

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

Moving on to the next part, you see a code statement. What's that? 

```javascript

const Play = mongoose.model('Play', playSchema)

```
A variable named `Play` is assigned to a function of mongoose where I am passing two params, namely, `Play` (again) and `playSchema`. 

playSchema is notable here, one can find out that we are passing our defined Schema to this `mongoose.model()`. Perfect. Let's learn what it actually does.

#

#### mongoose.model()

`mongoose.model() is a wrapper on the mongoose schema. What did that mean? - A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

Something similar to `Class`, you define the structure and then take an instance of that to manipulate data through the `new` keyword. The instance of Class. The interface of Schema. Got it? 

Let's crack the first and foremost parameter `Play`. It's the singular name of your collection that you are going to create in your database. Singular?  

Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model `play` is for the `plays` collection in the database - mongoose Docs

> Note: The .model() function makes a copy of schema

We are yet to create a document in our collection called `Play` ( In the database it is `plays` ) in a database named `playground`. Losing interest?. Don't. Hang in there, the very next step is about creating the very first document in the database. Are you ready? 

#

The next piece of code is something like this -

```javascript
async function playground() {
    const play = new Play ({
        nickname: 'Riley',
        hobby: 'Playing',
        job: 'Studying',
        age: 11,
        bookie: false,
        play: 'Inside Out',
        tags: ['Joy', 'Sadness', 'Anger', 'Fear', 'Disgust']
    })
    
    const result = await play.save()
    console.log('====================================');
    console.log(result)
    console.log('====================================');
}
```

An async function with few code statements executing in it. So far we have created our model and now we are trying to take the instance of this model. An instance of a model is called a document. Creating them and saving them to the database is easy. You get that right, use the `new` keyword to take the instance. That's what the first code block is trying to explain to you so far. 

```javascript
const play = new Play ({
        nickname: 'Riley',
        hobby: 'Playing',
        job: 'Studying',
        age: 11,
        bookie: false,
        play: 'Inside Out',
        tags: ['Joy', 'Sadness', 'Anger', 'Fear', 'Disgust']
 })
```

Variable `play` is a document here that contains all those fields we have defined and compiled so far. Defining the Schema & creating a fancy constructor called `model`. So the first document has info about Riley whose hobby is playing, age is 11 with some other tags. Note that we haven't defined the `Date` field here. No value was provided. Go back, & take a look at the Schema definition. Yes, it says that, if you provide your document with any specific date, it will assign a date variable with it and if not, then it will, itself, write the current time to the field. So far So good, a document has been created. Let's save this using mongoose's built-in function. We have that luxury!

```javascript
const result = await play.save()
```

Kindly note it down, we have declared `playground()` as an asynchronous function. Meaning that there is something in function, which deals with promises, which returns a promise after its execution, be that reject or resolve, whatever it may be. To make this async code simpler, we have used `async/await`, which is the sugar coat of `Promises`. 

With the schema and model set up, the mongoose save() method can now be used to insert a document into the “play” collection. The `play.save()` will either send an error or insert the document into our collection. You just need to simply console.log.

Not to forget, you better call the `playground()` function to see the end result. And after that, you can check the inserted document & its collection in your mongo shell by executing a few commands.

# 

While you might have successfully inserted a document in the database, this is not what we wanted. Why do I say so? See, you did everything right up to this point, no doubt. But what remains is accessing those documents from the database of a specific collection. Cause that's what we need, save data & display it later to a user.

After running the `playground()` function, you might see an object ended up in your console. The `result` variable. It outputs how our document has been inserted into the database by MongoDB. Yes, the `id field`. It is a unique number given to every document by MongoDB. Well, you can give an id of your choice anytime. But you will have to make sure it's novel and is given to every document out there. The choice is always yours.

Back to the point, `result` is displaying what we have entered just now. We don't know the past data record at all. No idea. This is where,` Queries` come to help us to backtrack the data back into our application. Yeah, that's what we want. Without further due, let's jump right on Query Track.

#### Query of Query

There are various ways to query a document from the MongoDB database. It can be a normal Query, Logical Query, Comparison Query, or Regular Expression Query. Anything.

Here is a simple hands-on fo simple normal Query - 

```javascript
async function getPlays() {

    const plays = await Play
            .find({ bookie: false }) 

    console.log('====================================');
    console.log(plays);
    console.log('====================================');
}
```
Try not to get thrown by the naming conventions that I have used. Rather try to read the code properly for a minute. As we are dealing with asynchronous code, you can clearly see async/await.
```javascript
const plays = await play.find({ bookie: false })
```

The code statement is to get those documents that have the `bookie: false` field in them. The `Play.find({ key: value })` is a simple query where you can retrieve any amount of document by passing a certain parameter. It's not mandatory to though. If you just thought of calling `Play.find()`, no problem, you are not going to deal with unknown errors. It's a valid code. Calling that statement will lead to the complete display of all the documents that are present in the database. You will get an array of objects as an output on your console.

#

Moving ahead in the course, Author Mosh teaches us some different types of queries including comparison query ( less than, greater than, equal to and so forth remaining ), logical query ( OR & And ), and a few queries based on the regular expressions. Let's know them in detail.

```javascript
const plays = await Play 
    .find({ age: { $gte: 10, $lte: 20 } })
```

Decoding the above code will lead us to a result of documents that have their age field either greater than equal to 10 ( `$gte: 10` )  or less than equal to 20 ( `$lte: 10` ). Simple as it is. Let's do one more such query.


```javascript
const plays = await Play 
    .find({ age: { $in: [5, 10, 15] } }) 
```

When used above code as a query on your documents, it will output those specific documents whose age field is similar to specified elements in the array `$in: [5, 10, 15]`. Telling us that, the resulted documents will have ages as 5, 10, or 15.  

Below is the list of Comparison Query Operators - 

1) `$eq` - Matches values that are equal to a specified value.
2) `$gt` - Matches values that are greater than a specified value.
3) `$gte` - Matches values that are greater than or equal to a specified value.
4) `$in` - Matches any of the values specified in an array.
5) `$lt` - Matches values that are less than a specified value.
6) `$lte` - Matches values that are less than or equal to a specified value.
7) `$ne` - Matches all values that are not equal to a specified value.
8) `$nin` - Matches none of the values specified in an array.

Go grab a cookie or have a cup of coffee and start playing with data using those operators. I bet, it will be great fun.
