/* the router is for directing different request to the handler*/


var path = require('path');
var handle = require('../Handlers/requestHandler.js');

/* to handle different actions or commands*/
var handler = {};
handler["/"] = handle.htmlRendering;
handler["/Action"] = handle.list;
handler["/action"] = handle.list;
handler["/ImgFiles"] = handle.download;

handler["/extjs4"] = handle.extjsHandler;
handler["/extjs4/resources/css"] = handle.extjsHandler;
handler["/extjs4/resources/themes/images/default/dd"] = handle.extjsHandler;
handler["/extjs4/resources/themes/images/default/grid"] = handle.extjsHandler;
handler["/extjs4/resources/themes/images/default/menu"] = handle.extjsHandler;
handler["/extjs4/resources/themes/images/default/form"] = handle.extjsHandler;
handler["/extjs4/resources/themes/images/default/sizer"] = handle.extjsHandler;
handler["/extjs4/resources/themes/images/default/tools"] = handle.extjsHandler;
handler["/extjs4/src/app"] = handle.extjsHandler;

handler["/gui"] = handle.guiModuleHandler;
handler["/gui/sampleGrid"] = handle.guiModuleHandler;
handler["/gui/mainWindow"] = handle.guiModuleHandler;
handler["/gui/sampleGrid/controller"] = handle.guiModuleHandler;
handler["/gui/sampleGrid/view/user"] = handle.guiModuleHandler;
handler["/gui/sampleGrid/model"] = handle.guiModuleHandler;



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
        console.log('handler not found to handle path ' + dirname);
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
