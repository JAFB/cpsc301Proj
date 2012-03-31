
var fs = require('fs');
var path = require('path');
var util = require('util');
var jade = require('jade');
/*
 To render html web page!!
*/

function get_Render(response, dirname, basename){
    console.log("GET method : get page from server!!! " + new Date());
    if (basename != '' ){
        response.render(basename);
    }else{
        console.log("rendering index page")
        response.render("index");
    }
}


function post_Render(response, postData, filename){
    console.log("POST method : adding new document into database!!! " + new Date());
}



function put_Render(response, postData, filename){
    console.log("PUT method : updating current document in database " + new Date());
}

exports.get_Render = get_Render;
exports.post_Render = post_Render;
exports.put_Render = put_Render;
