var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');
var httpRender = require('./httpTemplateRender.js');
var imgPath = path.dirname(__dirname) + '/Public/ImgFiles';



process.on('uncaughtException', function(err){
	console.log(err);
});

/*
 To process list request
*/
function list(response, dirname, basename){
    console.log("list handler is being called to list all image files!! " + new Date());
    var content = "empty";
    var command = 'ls ' + imgPath;
    exec(command , function(error, stdout, stderr){
        var outputPage = httpRender.indexPage({Title: 'Index page', Paragraph: stdout});
        //response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(outputPage);
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

	readStream.on('end', function(){
		response.end();
	});
		
	/*
    fs.readFile(imgFilePath, function(error, imageData){
        if (error) {
		response.writeHead(404, {"Content-Type": "text/plain"})
		response.write("Cannot read/find" + basename);
		response.end();
		console.log("read image error");
	}else{	
        	response.writeHead(200, {"Content-Type": "text/plain"});
        	response.write(imageData);
        	response.end();
	}
    })
	*/
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

exports.list = list;
exports.download = download;
exports.upload = upload;
