/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index');
};

exports.paint = function(req, res) {
	res.render('paint');
};

exports.website = function(req, res) {
	res.render('website');
};

exports.page = function(req, res) {
	res.render('page');
};

exports.simple_chat = function(req, res) {
	res.render('simple_chat',{
		json: req.ip
	});
};
