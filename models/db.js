var mongoose = require('mongoose');
var dbURL = 'mongodb://admin:root@ds029257.mongolab.com:29257/blog';
mongoose.connect(dbURL);

console.log('Mongoose connected on' + dbURL);
/*
mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});
process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through app termination');
		process.exit(0);
	});
});*/
exports.mongoose = mongoose;
