/* the router is for directing different request to the handler*/


var path = require('path');
var handle = require('../Handlers/requestHandler.js');

/* to handle different actions or commands*/
var get_handler = {};
var post_handler = {};
var put_handler = {};

get_handler["/"] = handle.get_Render;

post_handler['/users'] = handle.post_Render;

put_handler['/users'] = handle.put_Render;

var reqPath = ['/'];

function http_get(pathname, response){
    console.log("route to " + pathname);

    if (reqPath.indexOf(pathname) >= 0) {
        var dirname = path.dirname(pathname);
        var basename = path.basename(pathname);
        handle.get_Render(response, dirname, basename);
    } else {
        response.render('err_nopage');
        response.end();
    }
}


function http_post(pathname, response, postData){
    console.log("route to " + pathname);
    var dirname = path.dirname(pathname);
    var basename = path.basename(pathname);
    if (typeof uploadHandler[dirname] === 'function'){
        uploadHandler[dirname](response, postData, basename);
    }
}

function http_put(pathname, response, putData){
    console.log("PUT method : route to " + pathname )
}

exports.http_get = http_get;
exports.http_post = http_post;
exports.http_put = http_put;
