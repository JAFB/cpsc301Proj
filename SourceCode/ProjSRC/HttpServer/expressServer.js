var express = require('express');
var logfile = require('fs').createWriteStream(process.env['systemRootPath'] + '/SystemLogs/server.log', {flags: 'a'});
var expressAppServer = express.createServer();
var routers = require(process.env['systemRootPath'] + '/Routers/router.js');

expressAppServer.configure(function(){
    expressAppServer.set('views', process.env['systemRootPath'] + '/views');
    expressAppServer.set('view engine', 'jade');
    expressAppServer.set('view options', {pretty: true});

    expressAppServer.use(express.logger({stream: logfile}));
    expressAppServer.use(express.bodyParser());
    expressAppServer.use(express.static(process.env['systemRootPath'] +'/Public'));
});

expressAppServer.get(/./, function(request, response){
    routers.http_get(request.url, response);
})


exports.launchExpressServer = function(portNum){
    console.log('Express Application Server is launched and listening port ' + portNum);
    expressAppServer.listen(portNum);
};