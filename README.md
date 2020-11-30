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


