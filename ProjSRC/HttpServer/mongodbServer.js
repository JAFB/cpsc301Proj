/*
	database related action handler
 */

var datamodule = require('../Modules/datamodule.js')
var Database = require('../Modules/database.js').Database;
var mongodbObj = new Database('cem_db', 'localhost', 27017, function(err){
    console.log("Database connection error : " + err);
});

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


/* Login request handler */
exports.userLogin = function(collectionName,request,response){

    var loginQuery = {email: request.body['userid']} //user email as login id.

	mongodbObj.findOne(collectionName,loginQuery, function(err, docs){
		response.contentType('json');
		if (err){//Database Error
			console.log(err);
		}else if(docs==null || request.body['password']!==docs.password){
			/* if no such ID, or pasword does not match */
			response.json({
				failure: true
			});
		}else{//Login success
			/* Give a session */
			request.session.auth = true;
			request.session.username = docs.name;
			request.session.admin = docs.admin;
			request.session.email = docs.email;
			response.json({
				success: true
			});
		}
	});
};

/* Recent Instant Message loading */
exports.IMLoad = function(collectionName, request, response){
    mongodbObj.findOne(collectionName, {timeSlot:"resent"} , function(err, data){
        if (err) {
            console.log(err)
        } else {
			if(data==null){//recent message is empty
				response.json({
					success:true,
					data: { mssgForm: "" }
				})
			}
			else{
				updateMssgDate(collectionName, request, response, data);
			}
        }
    })
};
/* Load last day instant message */
exports.IMLoadLastDay = function(collectionName, request, response){
    mongodbObj.findOne(collectionName, {timeSlot:"lastday"} , function(err, data){
        if (err) {
            console.log(err)
        } else {
			if(data==null){//if there is no message
				response.json({
					success:true,
					data: { mssgForm: "" }
				})
			}
			else{
				response.json({
					success:true,
					data: data
				})
			}
        }
    })
};
/* Check the time of messages and change timeSlot if nessesary */
function updateMssgDate(collectionName, request, response, data){
	var oneday =  1000 * 60 * 60 * 24;
	if(( new Date() - data.time.getTime() ) > oneday){//out of date
		var currentData = data;
		/* make recent messages lastday */
		mongodbObj.findOne(collectionName, {timeSlot:"lastday"} , function(err, data){
			currentData.timeSlot = "lastday";
			delete currentData._id;
			if(data==null){//no lastday record exists
				mongodbObj.insert(collectionName, currentData, function(err, data){
					if (err) {
						console.log("error from inserting data!!")
						console.log(err);
					} 
				});
			}else{//overwrite current lastday record
				mongodbObj.update(collectionName,data._id.toHexString(), currentData, function(err, data){
					if (err) {
						console.log("error from inserting data!!")
						console.log(err);
					} 
				});
			}
		});
		/* make recent record empty */
		var now = new Date();
		var time = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0);
		mongodbObj.update(collectionName,data._id.toHexString(), {mssgForm:"",time: time }, function(err, data){
			if (err) {
				console.log("error from inserting data!!")
				console.log(err);
			} 
		});
		/* Return empty data */
		response.json({
				success: true,
				data: { mssgForm: "" }
		})
	}else{//not out of date
		response.json({
			success:true,
			data: data
		})
	}
};
/* Save message in database */
exports.IMSave = function(collectionName, request, response){
	/* Create object */
	var now = new Date();
	var IMData = {
		timeSlot : "resent",
		time : new Date(now.getFullYear(),now.getMonth(),now.getDate(),0),
		mssgForm : request.param("mssgForm")
	}
    mongodbObj.findOne(collectionName, {timeSlot:"resent"} , function(err, data){
        if (err) {
            console.log(err)
        } else {
			if(data==null){//if there is no recent record
				mongodbObj.insert(collectionName, IMData, function(err, data){
					if (err) {
						console.log("error from inserting data!!")
						console.log(err);
					} else {
						response.json({
							success: true
						})
					}
				});
			}else{//recent record exists
				/* Build new message object */
				var mssgData
				if(data.mssgForm=="")
					mssgData = IMData.mssgForm;
				else
					mssgData = data.mssgForm +'\n'+ IMData.mssgForm;
				/* Overwrite record */
				mongodbObj.update(collectionName,
					data._id.toHexString(),
					{mssgForm : mssgData, time: IMData.time} , function(err){
						if (err) {
							console.log("error from updating data!!")
							console.log(err);
						} else {
							response.json({
								success: true,
							})
						}
					});
			}
        }
    })
};