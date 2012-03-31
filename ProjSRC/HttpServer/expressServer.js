var express = require('express');
var logfile = require('fs').createWriteStream(process.env['systemRootPath'] + '/SystemLogs/server.log', {flags: 'a'});
var expressAppServer = express.createServer();
var mongodbServer = require('./mongodbServer.js');

expressAppServer.configure(function(){
    expressAppServer.set('views', process.env['systemRootPath'] + '/views');
    expressAppServer.set('view engine', 'jade');
    expressAppServer.set('view options', {pretty: true});
    expressAppServer.use(express.methodOverride());
    expressAppServer.use(express.bodyParser());
    expressAppServer.use(express.logger({stream: logfile, format: ':date :method :url :req[Accept] :req[Content-Type] :req[Content-Length]'}));
    expressAppServer.use(express.static(process.env['systemRootPath'] +'/Public'));
});


/*
 *
 */

expressAppServer.get('/', function(request, response){
    response.render('index');
});

expressAppServer.get('/userManagement', function(request, response){
    response.render('userManagement');
});

expressAppServer.get('/users', function(request, response){
    mongodbServer.findAll('user', request, response);
});

expressAppServer.put('/users/:id', function(request, response){
    mongodbServer.update('user', request, response);
});

expressAppServer.post('/users/:id', function(request, response){
    mongodbServer.insert('user', request, response);
});


expressAppServer.del('/users/:id', function(request, response){
    mongodbServer.remove('user', request, response);
})


exports.launchExpressServer = function(portNum){
    console.log('Express Application Server is launched and listening port ' + portNum);
    expressAppServer.listen(portNum);
};

