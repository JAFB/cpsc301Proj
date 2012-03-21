/**
 * Module dependencies.
 */

var express = require('express');
var Database = require('./database').Database;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { pretty: true });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

var Database = new Database('node-mongo-blog','localhost', 27017);
// Routes

app.get('/', function(req, res){
    Database.findAll('articles', function(error,docs){
        res.render('index.jade', { 
            locals: {
                title: 'Topics',
                docs: docs
            }
        });
    })
});

app.get('/topic/new', function(req, res) {
    res.render('topic_new.jade', { locals: {
        title: 'New Post'
    }
    });
});

app.post('/topic/new', function(req, res){
    Database.insert(
		'articles',
	{
        title: req.param('title'),
		author: req.param('name'),
        body: req.param('body'),
		comments: []
    }, function(error, docs) {
        res.redirect('/')
    });
});

app.get('/topic/:id', function(req, res) {
    Database.findById('articles', req.params.id, function(error, doc) {
		if (error) res.redirect('/');
        res.render('topic_show.jade',
        { locals: {
            title: doc.title,
            article: doc
        }
        });
    });
});

app.post('/topic/addComment', function(req, res) {
    Database.addComment('articles', req.param('_id'), {
        name: req.param('name'),
        comment: req.param('comment'),
        created_at: new Date()
       }, function( error, docs) {
           res.redirect('/topic/' + req.param('_id'))
       });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
