/* ---------------------------------------------------------------------
database.js
description  -- provides an interface to MongoDB.
Author		 -- Akio Hoshikawa
Date		 -- Mar 23, 2012

Mar 25, 2012 -- Added callback function for Database().
Mar 29, 2012 -- Added findOne function.
----------------------------------------------------------------------- */
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
var util = require('util');

/* ---------------------------------------------------------------------
Database()
precondition -- none
description  -- Open a connection to database
Params		 -- dbName: name of database to connect
host:   addoress of database(usually 'localhost')
port:	port number of database
postcondition-- Connection to database is opened
----------------------------------------------------------------------- */
Database = function(dbName,host, port,callback) {
  this.db= new Db(dbName, new Server(host, port, {auto_reconnect: true}, {}));
  this.db.open(function(err, db){
	if(err) callback(err);
	else	util.log("Connected to " + dbName);
  });
};

/* ---------------------------------------------------------------------
Database.close()
precondition -- connection to database is opened
description  -- close a connection to database
If auto_reconnection is set, this function may be useless.
postcondition-- Connection to database is closed
----------------------------------------------------------------------- */
Database.prototype.close = function() {
  this.db.close(function(){
	util.log("Disconnected from database");
  });
};

/* ---------------------------------------------------------------------
Database.getCollection()
precondition -- connection to database is opened
description  -- Returns a collection instance in callback function
params		 -- collectionName: name of collection
callback:		callback function which is called with
1st arg: error
2nd arg: collection instance
postcondition-- collection instance is passed into callback function and
					it is invoked.
----------------------------------------------------------------------- */
Database.prototype.getCollection= function(collectionName,callback) {
  this.db.collection(collectionName, function(error, collection) {
    if( error ) callback(error);
    else callback(null, collection);
  });
};

/* ---------------------------------------------------------------------
Database.findAll()
precondition -- connection to database is opened
description  -- Returns all documents in a given collection as an array
params		 -- collectionName: name of collection
callback:		callback function which is called with
1st arg: error
2nd arg: an array of object
postcondition-- all objects are passed into callback function and
the callback function is invoked.
----------------------------------------------------------------------- */
Database.prototype.findAll = function(collectionName, callback) {
    this.getCollection(collectionName, function(error, collection) {
      if( error ) callback(error)
      else {
        collection.find().toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};
/* ---------------------------------------------------------------------
Database.find()
precondition -- connection to database is opened
description  -- Returns matched objects
params		 -- collectionName: name of collection
query:			query for searching which has following form:
{field : value}
callback:		callback function which is called with
1st arg: error
2nd arg: an array of matched objects
postcondition-- matched objects are passed into callback function and
the callback function is invoked.
----------------------------------------------------------------------- */
Database.prototype.find = function(collectionName, query, callback) {
    this.getCollection(collectionName, function(error, collection) {
      if( error ) callback(error)
      else {
        collection.find(query).toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};
/* ---------------------------------------------------------------------
Database.findById()
precondition -- connection to database is opened
description  -- Returns a document specified with an id
params		 -- collectionName: name of collection
objId:			an id of object(in 24 digit Hex)
callback:		callback function which is called with
1st arg: error
2nd arg: a matched object
Postcondition-- specified object is passed into callback function and
the callback function is invoked.
----------------------------------------------------------------------- */
Database.prototype.findById = function(collectionName, objId, callback) {
    this.getCollection(collectionName, function(error, collection) {
      if( error ) callback(error)
      else {
		var targetId = new ObjectID.createFromHexString(objId);
        collection.findOne({_id: targetId}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};
/* ---------------------------------------------------------------------
Database.findOne()
precondition -- connection to database is opened
description  -- Returns one document specified with query
params		 -- collectionName: name of collection
query:			query for searching which has following form:
{field : value}
callback:		callback function which is called with
1st arg: error
2nd arg: a matched object
Postcondition-- specified object is passed into callback function and
the callback function is invoked.
----------------------------------------------------------------------- */
Database.prototype.findOne = function(collectionName, query, callback) {
    this.getCollection(collectionName, function(error, collection) {
      if( error ) callback(error)
      else {
        collection.findOne(query, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};
/* ---------------------------------------------------------------------
Database.insert()
precondition -- connection to database is opened
description  -- insert a given document
params		 -- collectionName: name of collection
docs:			a object to be inserted
callback:		callback function which is called with
1st arg: error
2nd arg: inserted document
postcondition-- a given document is inserted and a callback function is
called
----------------------------------------------------------------------- */
Database.prototype.insert = function(collectionName, docs, callback) {
	this.getCollection(collectionName, function(error, collection) {
      if( error ) callback(error)
      else {
        collection.insert(docs, function() {
          callback(null, docs);
        });
      }
    });
};
/* ---------------------------------------------------------------------
Database.append()
precondition -- connection to database is opened
description  -- append a record to an object
Params		 -- collectionName: name of collection
objId:			an id of object(in 24 digit Hex)
appendObj:		a record to be appended which has following form:
{field : value}
callback:		callback function which is called with
1st arg: error
2nd arg: updated object
postcondition-- a given record is appended and callback function is involed
----------------------------------------------------------------------- */
Database.prototype.append = function(collectionName,objId, appendObj, callback) {
  this.getCollection(collectionName,function(error, collection) {
    if( error ) callback( error );
    else {
		var targetId = new ObjectID.createFromHexString(objId);
		collection.update(
        {_id: targetId},
        {"$push": appendObj},
        function(error, doc){
          if( error ) callback(error);
          else callback(null, doc)
        });
    }
  });
};
/* ---------------------------------------------------------------------
Database.remove()
precondition -- connection to database is opened
description  -- remove an object
params		 -- collectionName: name of collection
objId:			an id of object(in 24 digit Hex)
callback:		callback function which is called with
1st arg: error
2nd arg: number of removed objects
postcondition-- a given object is removed and callback function is involed
----------------------------------------------------------------------- */
Database.prototype.remove = function(collectionName, objId, callback){
    this.getCollection(collectionName, function(error, collection) {
      if( error ) callback(error)
      else {
		var targetId = new ObjectID.createFromHexString(objId);
		collection.remove(
			{_id: targetId},{safe:true},
			function(error, numberOfRemovedObj){
            if( error ) callback(error);
            else callback(null, numberOfRemovedObj)
        });
	  }
	});
};
/* ---------------------------------------------------------------------
Database.update()
precondition -- connection to database is opened
description  -- update a field of an object
params		 -- collectionName: name of collection
objId:			an id of object(in 24 digit Hex)
data:			a record to be updated which has following form:
{field : value}
callback:		callback function which is called with
1st arg: error
postcondition-- a given object is updated with a given data
----------------------------------------------------------------------- */
Database.prototype.update = function(collectionName, objId, data, callback){
    this.getCollection(collectionName, function(error, collection) {
      if( error ) callback(error)
      else {
		var targetId = new ObjectID.createFromHexString(objId);
		collection.update(
		  {_id: targetId},
		  {"$set":data},
		  function(error){
            if( error ) callback(error);
            else callback(null)
        });
	  }
	});
};


exports.Database = Database;
