require("./config.js")
var server = require("./HttpServer/simpleServer.js");
var expressServer = require("./HttpServer/expressServer.js")

/*
To Launch the server
 */
expressServer.launchExpressServer(13910);