/* the router is for directing different request to the handler*/


var path = require('path');
var handle = require('../Handlers/requestHandler.js');

/* to handle different actions or commands*/
var handler = {};
handler["/"] = handle.list;
handler["/Action"] = handle.list;
handler["/action"] = handle.list;
handler["/ImgFiles"] = handle.download;


/* to handle upload request*/
var uploadHandler = {};
uploadHandler["/ImgFiles"] = handle.upload;



function route(pathname, response){
    console.log("route to " + pathname);

    var dirname = path.dirname(pathname);
    var basename = path.basename(pathname);

    if (typeof handler[dirname] === 'function'){
        handler[dirname](response, dirname, basename);
    } else {
        console.log('handler not found to handle path ' + pathname);
    }
}


function uploadRoute(pathname, response, postData){
    console.log("route to " + pathname);
    var dirname = path.dirname(pathname);
    var basename = path.basename(pathname);
    if (typeof uploadHandler[dirname] === 'function'){
        uploadHandler[dirname](response, postData, basename);
    }
}

exports.route = route;
exports.uploadRoute = uploadRoute;
