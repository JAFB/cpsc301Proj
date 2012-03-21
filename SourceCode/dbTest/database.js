var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
var util = require('util');

Database = function(dbName,host, port) {
  this.db= new Db(dbName, new Server(host, port, {auto_reconnect: true}, {}));
  this.db.open(function(){
	util.log("Connected to " + dbName);
  });
};

Database.prototype.close = function() {
  this.db.close(function(){
	util.log("Disconnected to " + dbName);
  });
};

//getCollection

Database.prototype.getCollection= function(collectionName,callback) {
  this.db.collection(collectionName, function(error, collection) {
    if( error ) callback(error);
    else callback(null, collection);
  });
};

//findAll
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

//findById

Database.prototype.findById = function(collectionName, id, callback) {
    this.getCollection(collectionName, function(error, collection) {
      if( error ) callback(error)
      else {
        collection.findOne({_id: collection.db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};

//save
Database.prototype.insert = function(collectionName, docs, callback) {
    this.getCollection(collectionName, function(error, collection) {
      if( error ) callback(error)
      else {
        if( typeof(docs.length)=="undefined")
          docs = [docs];

        for( var i =0;i< docs.length;i++ ) {
          doc = docs[i];
          doc.created_at = new Date();
          /*if( doc.comments === undefined ) doc.comments = [];
          for(var j =0;j< doc.comments.length; j++) {
            doc.comments[j].created_at = new Date();
          }*/
        }

        collection.insert(docs, function() {
          callback(null, docs);
        });
      }
    });
};

//addCommentToArticle

Database.prototype.addComment = function(collectionName,docId, comment, callback) {
  this.getCollection(collectionName,function(error, collection) {
    if( error ) callback( error );
    else {
      collection.update(
        {_id: collection.db.bson_serializer.ObjectID.createFromHexString(docId)},
        {"$push": {comments: comment}},
        function(error, doc){
          if( error ) callback(error);
          else callback(null, doc)
        });
    }
  });
};

Database.prototype.remove = function(collectionName, docId, callback){
    this.getCollection(collectionName, function(error, collection) {
      if( error ) callback(error)
      else {
		collection.remove(
		  {_id: collection.db.bson_serializer.ObjectID.createFromHexString(docId)},
		  function(error, numOfRemovedItem){
            if( error ) callback(error);
            else callback(null, numOfRemovedItem)
        });
	  }
	});
};

Database.prototype.update = function(collectionName, docId, doc, callback){
    this.getCollection(collectionName, function(error, collection) {
      if( error ) callback(error)
      else {
		collection.update(
		  {_id: collection.db.bson_serializer.ObjectID.createFromHexString(docId)},
		  doc,
		  function(error, doc){
            if( error ) callback(error);
            else callback(null, doc)
        });
	  }
	});
};


exports.Database = Database;
