
/**
 * Module dependencies.
 */

var express = require('express');

var routes = require('./routes');
var sina = require('./routes/sina');
var sources = require('./routes/sources');
var chat = require('./models/chat');

var fourzorefour = require('./routes/fourzorefour.js');
var http = require('http');
var path = require('path');
var ejs = require('ejs');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

//chat
chat.simple_chat(io);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.html', ejs.__express);
app.set('view engine', 'html');
//app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.favicon(path.join(__dirname, '/public/images/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//change public router to pritor the router
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.page);
app.get('/index', routes.index);
app.get('/paint', routes.paint);
app.get('/website', routes.website);
app.get('/chat', routes.simple_chat);

app.get('/sina/example1', sina.example1);
app.get('/unity', sina.unity);
//app.get('/study/:content', study.script);

app.get('/downloads/:filename',sources.downloads);
app.get('/downloads/*', sources.err);
app.get('/?*',fourzorefour.one);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
