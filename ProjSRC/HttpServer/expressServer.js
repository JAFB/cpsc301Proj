var express = require('express');
var logfile = require('fs').createWriteStream(process.env['systemRootPath'] + '/SystemLogs/server.log', {flags: 'a'});
var expressAppServer = express.createServer();
var datamodule = require('../Modules/datamodule.js')
var Database = require('../Modules/database.js').Database;
var mongodbObj = new Database('cem_db', 'localhost', 27017, function(err){
    console.log("Database connection error : " + err);
})

expressAppServer.configure(function(){
    expressAppServer.set('views', process.env['systemRootPath'] + '/views');
    expressAppServer.set('view engine', 'jade');
    expressAppServer.set('view options', {pretty: true});
    expressAppServer.use(express.methodOverride());
    expressAppServer.use(express.bodyParser());
    expressAppServer.use(express.logger({stream: logfile, format: ':date :method :url :req[Accept] :req[Content-Type] :req[Content-Length]'}));
    expressAppServer.use(express.static(process.env['systemRootPath'] +'/Public'));
});

expressAppServer.get('/', function(request, response){
    response.render('index');
});


expressAppServer.get('/userManagement', function(request, response){
    response.render('userManagement');
});



expressAppServer.get('/users', function(request, response){
    mongodbObj.findAll('user', function(err, userdata){
        response.contentType('json');
        if (err) console.log(err);
        response.json({
            success: true,
            data: userdata
        });
        response.render('index')
    });
});

expressAppServer.put('/users/:id', function(request, response){
    console.log("PUT /users/:id");
    console.log(request.body);
    var userobj_update = new datamodule.user();
    for(var k in userobj_update) {
        userobj_update[k] = request.body[k]
    }

    mongodbObj.update('user',request.body['_id'], userobj_update, function(err, data){
        if (err) {
            console.log(err)
        }
        userobj_update = null;
    })

});

expressAppServer.post('/users', function(request, response){
    console.log("POST /users");
    console.log(request.body);
    var newUserData = Object.create(request.body);
    mongodbObj.insert('user', newUserData, function(err, newUserData){
        if (err) {
            console.log(err);
        }
    });

});

expressAppServer.post('/users/:id', function(request, response){
    console.log("POST /users/:id " );
    console.log(request.body);
    var userobj_new = new datamodule.user();
    for(var k in userobj_new) {
        userobj_new[k] = request.body[k]
    }

    mongodbObj.insert('user', userobj_new, function(err, userobj_new){
        if (err) {
            console.log(err);
        }
    });

});

exports.launchExpressServer = function(portNum){
    console.log('Express Application Server is launched and listening port ' + portNum);
    expressAppServer.listen(portNum);
};

