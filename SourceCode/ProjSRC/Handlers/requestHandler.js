
var fs = require('fs');
var path = require('path');
var util = require('util');
var jade = require('jade');

process.on('uncaughtException', function(err){
	console.log(err);
});

/*
 To render html web page!!
*/
function htmlRendering(response, dirname, basename){
    console.log("htmlRendering handler is being called to render html page!! " + new Date());
    var templatePath = process.env["htmlTemplates"] + "index.jade";
    if(basename != ""){
        templatePath = process.env["htmlTemplates"] + "/" + basename + ".jade"
    }
    fs.readFile(templatePath, 'utf-8', function(err, data){
        if (err) console.log(err);
        var htmlStream = jade.compile(data, {filename: templatePath, pretty: true})();
        response.write(htmlStream);
        response.end();

    })
}

function extjsHandler (response, dirname, basename){
    console.log("jsExtjs4 handler is being called to return extjs4 lib " + new Date());

    var extjsPath = path.join(process.env["libs"], dirname + "/" + basename);

    var readStream = fs.createReadStream(extjsPath);
    readStream.on('data', function(data){
        response.write(data);
    });

    readStream.on('end', function(){
        response.end();
    })
}


function guiModuleHandler(response, dirname, basename){
    console.log("jsHandler handler is being called to return javascript files " + new Date());
    var jspath = path.join(process.env["modules"], dirname + "/" + basename);
    var readStream  = fs.createReadStream(jspath);

    readStream.on('data', function(data){
        response.write(data);
    });

    readStream.on('end', function(data){
        response.end();
    })

}


/*
 To process download request 
*/
function download(response, dirname, basename){
    console.log("download handle is being called to download the image file!! " + new Date() );
    var imgFilePath = path.join('ImgFiles/',basename);
		
	var readStream  = fs.createReadStream(imgFilePath);

    readStream.on('data', function(data){
        response.write(data);
    });

    readStream.on('end', function(data){
        response.end();
    })

}

/*
 To process upload request
*/

function upload(response, postData, filename){
    console.log("upload handle is being called to write file into file system!! " + new Date());
    var filepath = path.join("ImgFiles/", filename);
    fs.writeFile(filepath, postData, 'binary', function(error){
        if (error) console.log(error);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(filename + "  is stored into server!!!");
        response.end();
    })
}

exports.htmlRendering = htmlRendering;
exports.extjsHandler = extjsHandler;
exports.guiModuleHandler = guiModuleHandler;
exports.download = download;
exports.upload = upload;
