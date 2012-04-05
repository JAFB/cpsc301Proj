var datamodule = require('../Modules/datamodule.js')
var Database = require('../Modules/database.js').Database;
var mongodbObj = new Database('cem_db', 'localhost', 27017, function(err){
    console.log("Database connection error : " + err);
});

/*

 */
exports.findAll = function(collectionName, request, response){
    mongodbObj.findAll(collectionName, function(err, data){
        response.contentType('json');
        if (err) console.log(err);
        response.json({
            success: true,
            data: data
        });

    });
};

exports.findById = function(collectionName, request, response){
    mongodbObj.findById(collectionName, request.body['_id'], function(err, data){
        response.contentType('json');
        if (err) {
            console.log(err);
        } else {
            response.json({
                success: true,
                data: data
            })
        }
    })
}

exports.update = function(collectionName, request, response){
    var userDoc_update = new datamodule.user();
    for(var k in userDoc_update) {
        userDoc_update[k] = request.body[k]
    }
    mongodbObj.update(collectionName, request.body['_id'], userDoc_update, function(err, data){
        if (err) {
            console.log("error from Updating data!!")
            console.log(err)
        }
        response.json({
            success: true,
            data: data
        })
    })

};

exports.insert = function(collectionName, request, response){

    if(request.body['_id'] == ''){
        var doc_new = new datamodule[collectionName];
        for(var k in doc_new) {
            doc_new[k] = request.body[k]
        }

        mongodbObj.insert(collectionName, doc_new, function(err, data){
            if (err) {
                console.log("error from inserting data!!")
                console.log(err);
            } else {
                response.json({
                    success: true,
                    data: data
                })
            }
        });
    } else {
        mongodbObj.findById(collectionName, request.body['_id'], function(err, data){
            if (err) {
                console.log("Object '_id' exist, error from finding Object by '_id' ");
                console.log(err);
            } else {
                response.json({
                    success: true,
                    data: data
                })
            }
        })
    }
};

exports.remove = function(collectionName, request, response){
    mongodbObj.remove(collectionName, request.body['_id'], function(err, data){
        if (err) {
            console.log(err)
        } else {
            response.json({
                success:true,
                data: data
            })
        }
    })
};

exports.userLogin = function(collectionName,request,response){

    var loginQuery = {email: request.body['userid']} // to user email as login id.

	mongodbObj.findOne(collectionName,loginQuery, function(err, docs){
		response.contentType('json');
		if (err){//Database Error
			console.log(err);
			request.send("500 Internal Server Error",500);
		}else if(docs==null){
			response.json({
				failure: true
			});
		}else if(request.body['password']===docs.password){
			request.session.auth = true;
			request.session.username = docs.name;
			request.session.admin = docs.admin;
            request.session.email = docs.email;
			response.json({
				success: true
			});
		}else{
			response.json({
				failure: true
			});
		}
	});
};