var express = require('express');
var assert = require('assert');
var Database = require('./database').Database;

var Database = new Database('testDB','localhost', 27017);
var collectionName = 'testCollection';

docs = [
	{"author" : "John",
	"title" : "Subject",
	"created_at" : new Date(),
	"body" : "Test string",
	"comments" : []},
	
	{"author" : "Alex",
	"title" : "Second Subject",
    "created_at" : new Date(),
    "body" : "Example body",
	  "comments" : []}
];


	
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
	if(chunk==1){//Insert Test
		Database.insert(collectionName,docs, function(error,docs){
			assert.equal(error,null);
			console.log(docs);
			console.log(docs.length + " items inserted");
		});
	} else if(chunk==2){//findAll Test
		Database.findAll(collectionName, function(error,results){
			assert.equal(error,null);
			console.log(results);
			console.log("\n" + results.length + " items are found");
		});
	} else if(chunk==3){//remove test
		Database.findAll(collectionName, function(error,results){
			assert.equal(error,null);
			if(results.length >0){
				for(var i=0; i<results.length; i++){
					Database.remove(collectionName, results[i]._id.toHexString(),function(error,numOfRemovedItem){
							assert.equal(error,null);
							assert.equal(1,numOfRemovedItem);
							console.log("Removing..");
							console.log(numOfRemovedItem + " items are removed");
					});
				}
			}	
		});
	} else if(chunk==4){//update test
		Database.findAll(collectionName, function(error,results){
			assert.equal(error,null);
			if(results.length >0){
				for(var i=0; i<results.length; i++){
					Database.update(collectionName, results[i]._id.toHexString(), {
						author: "test",
					}, function(error) {
						assert.equal(error,null);
					});
				}
			}
		});
		console.log("All authors are changed into 'test'")
	} else if(chunk==5){//find test
		console.log("Searching all record with {author:Alex}");
		Database.find(collectionName,{author:"Alex"}, function(error,results){
			assert.equal(error,null);
			console.log(results);
		});
	} else if(chunk==6){//append test
		Database.findAll(collectionName, function(error,results){
			assert.equal(error,null);
			if(results.length >0){
				for(var i=0; i<results.length; i++){
					Database.append(collectionName, results[i]._id.toHexString(), {
					  "comments":{
						author: 'appendFunc',
						body: 'Appended'}
					}, function(error) {
						assert.equal(error,null);
					});
					console.log("Appending comments.." +results[i]._id.toHexString());
				}
			}
		});
	}else if(chunk==7){//find by id test
		Database.findAll(collectionName, function(error,results){
			assert.equal(error,null);
			if(results.length >0){
				for(var i=0; i<results.length; i++){
					console.log("Obtaining "+ results[i]._id);
					Database.findById(collectionName, results[i]._id.toHexString(), 
					function(error,docs) {
						assert.equal(error,null);						
						console.log(docs);
					});
				}
			}
		});
	} else if(chunk==0){// close (useless currently)
		Database.close();
	}
});
process.stdin.on('end', function () {
});



