/* a simple web server to receive request from client side*/

var httpServer = require('http');
var urlParse = require('url');
var routers = require('../Routers/router.js')
function chkFavoriteIcon(request){

}

function WebServer(portNum){
    function onRequest(request, response){
        console.log(request.method);
        console.log(request.url);
        //var commandStr = request.url;
        var method = request.method;
        var pathStr = request.url;
        var postData = '';

        if(pathStr === '/favicon.ico'){

            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end();
            return ;
        }

        console.log("Request Received!!");

        if(method === 'GET'){

            routers.route(pathStr, response);

        } else if(method === 'POST'){
            request.setEncoding("binary");
            var chunkNum = 1;
            request.addListener("data", function(postDataChunk){
                postData += postDataChunk;
                chunkNum += 1;
                console.log("Received post data!! " + "chunkData" + chunkNum );
            })

            request.addListener("end", function(){
                routers.uploadRoute(pathStr, response, postData);
            })
        }
        return ;
    }


    httpServer.createServer(onRequest).listen(portNum);
    console.log("Server has started!!! port: " + portNum);
}

exports.WebServer = WebServer;
