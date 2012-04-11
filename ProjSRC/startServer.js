require("./config.js")
var expressServer = require("./HttpServer/expressServer.js");
var port = process.argv[2] || 13910;
expressServer.launchExpressServer(port);
