/*
	HTTP Server and Configuration
 */
var express = require('express');
var logfile = require('fs').createWriteStream(process.env['systemRootPath'] + '/SystemLogs/server.log', {flags: 'a'});
//var expressAppServer = express.createServer(); //
var expressAppServer = express(); // create a application object 

var mongodbServer = require('./mongodbServer.js');

/* Express configurations */
expressAppServer.configure(function(){
    expressAppServer.set('views', process.env['systemRootPath'] + '/views');
    expressAppServer.set('view engine', 'jade');
    expressAppServer.set('view options', {pretty: true});
    expressAppServer.use(express.methodOverride());
    expressAppServer.use(express.bodyParser());
	expressAppServer.use(express.cookieParser());
	expressAppServer.use(express.session({ secret: "JAFB SecretPass"}));  
    expressAppServer.use(express.logger({stream: logfile, format: ':date :method :url :req[Accept] :req[Content-Type] :req[Content-Length]'}));
    expressAppServer.use(express.static(process.env['systemRootPath'] +'/Public'));
});

/*-- General query handling starts here --*/
expressAppServer.get('/', function(request, response){
	if(request.session.auth)
      response.redirect('/main');
    else response.render('index');
});
expressAppServer.get('/main', function(request, response) {
    if(request.session.auth)
		response.render('main')
    else response.redirect('/');
});

/*-- Login action handling starts here --*/
expressAppServer.post('/login', function(request, response) {
    mongodbServer.userLogin('user', request, response);
});
expressAppServer.get('/logout', function(req, res){
  req.session.destroy();
  res.contentType('json');
  res.json({success: true});
});
/* Send session data(username, admin status, etc) to browser */
expressAppServer.get('/session', function(request, response){
	response.contentType('json');
	if(request.session.auth){
	  response.json({
	    success: true,
	    data: {
            username: request.session.username,
	        admin: request.session.admin,
            email: request.session.email
	    }
	  });
	}else{
	  response.json({
	    failure: true
	  });
	}
});

/*-- User management action handling starts here --*/
expressAppServer.get('/users', function(request, response){
	if(request.session.admin){
		mongodbServer.findAll('user', request, response);
	}else
		send403Message(response);
});
expressAppServer.put('/users/:id', function(request, response){
	if(request.session.admin){
		var pwdstr = request.body['password'];
		request.body['password'] = mongodbServer.pwdEncrypt(pwdstr); // encrypt user's password

		if(request.body['_id'] == ""){
			delete request.param["_id"];
			mongodbServer.insert('user',request,response);
		}else{
			mongodbServer.update('user', request, response);
		}
	}else
		send403Message(response);	
});
expressAppServer.post('/users', function(request, response){
	if(request.session.admin){
		var pwdstr = request.body['password'];
		request.body['password'] = mongodbServer.pwdEncrypt(pwdstr); // encrypt user's password
		mongodbServer.insert('user', request, response);
	}else
		send403Message(response);
});
expressAppServer.del('/users/:id', function(request, response){
	if(request.session.admin){
		if(request.body['_id'] == ""){
			response.json({success:true});
		} else
		mongodbServer.remove('user', request, response);
	}else
		send403Message(response);
});

/*-- Memo action handling starts here --*/
expressAppServer.get('/memos', function(request, response){
	if(request.session.auth){
		mongodbServer.findAll('memo', request, response);
	}else
		send403Message(response);
});
expressAppServer.get('/memos/:id', function(request, response){
	if(request.session.auth){
		mongodbServer.findById('memo', request, response);
	}else
		send403Message(response);
})
expressAppServer.put('/memos/:id', function(request, response){
	if(request.session.admin){
		mongodbServer.update('memo', request, response);
	}else
		send403Message(response);
})
expressAppServer.post('/memos/:id', function(request, response){
	if(request.session.admin){
		mongodbServer.insert('memo', request, response);
	}else
		send403Message(response);
});
expressAppServer.post('/memos', function(request, response){
	if(request.session.admin){
		mongodbServer.insert('memo', request, response);
	}else
		send403Message(response);
});
expressAppServer.del('/memos/:id', function(request, response){
	if(request.session.admin){
		mongodbServer.remove('memo', request, response);
	}else
		send403Message(response);
});

/*-- Instant message action handling starts here --*/
expressAppServer.get('/mes', function(request, response){
	if(request.session.auth){
		if(request.param('timeSlot')=='lastday')
			mongodbServer.IMLoadLastDay('IM', request, response);
		else
			mongodbServer.IMLoad('IM', request, response);
	}else
		send403Message(response);
});
expressAppServer.post('/mes', function(request, response){
	if(request.session.auth){
		mongodbServer.IMSave('IM',request,response);
	}else
		send403Message(response);
});


/*-- Discussions action handling starts here --*/
expressAppServer.get('/discussion', function(request, response){
	if(request.session.auth){
		mongodbServer.findAll('discussion', request, response);
	}else
		send403Message(response);
});
expressAppServer.get('/discussion/:id', function(request, response){
	if(request.session.auth){
		mongodbServer.findById('discussion', request, response);
	}else
		send403Message(response);
});
expressAppServer.put('/discussion', function(request, response){
	if(request.session.auth){
		mongodbServer.update('discussion', request, response);
	}else
		send403Message(response);
});
expressAppServer.put('/discussion/:id', function(request, response){
	if(request.session.auth){
		mongodbServer.update('discussion', request, response);
	}else
		send403Message(response);
});
expressAppServer.post('/discussion/:id', function(request, response){
	if(request.session.auth){
		mongodbServer.insert('discussion', request, response);
	}else
		send403Message(response);
});
expressAppServer.post('/discussion', function(request, response){
	if(request.session.auth){
		if (request.body['_id'].trim() != ''){
			mongodbServer.update('discussion', request, response);
		}else{
			mongodbServer.insert('discussion', request, response);
		}
	}else
		send403Message(response);
});
expressAppServer.del('/discussion/:id', function(request, response){
	if(request.session.admin){
		mongodbServer.remove('discussion', request, response);
	}else
		send403Message(response);
});

function send403Message(response){
	response.send("403: Invalid Access",403);
}

/* Run the server */
exports.launchExpressServer = function(portNum){
    console.log('Express Application Server is launched and listening port ' + portNum);
    expressAppServer.listen(portNum);
};

