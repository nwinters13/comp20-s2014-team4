// web.js
var express = require('express');
var mongo = require('mongodb');
var connect = require('connect');
var bodyParser = require('body-parser');

var app = express();

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';

app.use(bodyParser());

// TEMPORARY  ===  REMOVE BEFORE FINAL =================

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", null);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");//X-Requested-With");
    next();
});

// ======================================================



app.get('/', function(req, res) {
    res.sendfile('./public/login.html');
});

app.get('/login', function(req, res) {
    res.sendfile('./public/login.html');
});

app.get('/login.html', function(req, res) {
    res.sendfile('./public/login.html');
});

app.get('/login.js', function(req, res) {
    res.sendfile('./public/js/login.js');
});

app.get('/js/login.js', function(req, res) {
    res.sendfile('./public/js/login.js');
});

app.get('/graphs', function(req, res) {
    res.sendfile('./public/graphpage.html');
});

app.get('/graphs.html', function(req, res) {
    res.sendfile('./public/graphpage.html');    
});

app.get('/input', function(req, res) {
    res.sendfile('./public/inputpage.html');
});

app.get('/input.html', function(req, res) {
    res.sendfile('./public/inputpage.html');
});

app.get('/js/_graph.js', function(req, res) {
    res.sendfile('./public/js/_graph.js');
});

app.get('/js/inputpage.js', function(req, res) {
    res.sendfile('./public/js/inputpage.js');
});

app.get('/js/_main.js', function(req, res) {
    res.sendfile('./public/js/_main.js');
});

app.get('/js/jquery.min.js', function(req, res) {
    res.sendfile('./public/js/jquery.min.js');
});

app.get('/js/vendor/jquery-1.9.1.min.js', function(req, res) {
    res.sendfile('./public/js/vendor/jquery-1.9.1.min.js');
});

app.get('/css/normalize.css', function(req, res) {
    res.sendfile('./public/css/normalize.css');
});

app.get('/css/main.css', function(req, res) {
    res.sendfile('./public/css/main.css');
});

app.get('/js/vendor/modernizr-2.7.1.min.js', function(req, res) {
    res.sendfile('./public/js/vendor/modernizr-2.7.1.min.js');
});

app.get('/js/imagesloaded.js', function(req, res) {
    res.sendfile('./public/js/imagesloaded.js');
});

app.get('/js/skrollr.js', function(req, res) {
    res.sendfile('./public/js/skrollr.js');
});

app.get('/bootstrap.min.css', function(req, res){
    res.sendfile('./public/css/bootstrap.min.css');
});

app.get('/css/bootstrap.min.css', function(req, res){
    res.sendfile('./public/css/bootstrap.min.css');
});

app.post('/post.json', function(req, res){
    if(req.body.email === undefined || req.body.email === null){
	res.send(400);
    }
    else if(req.body.trip === undefined || req.body.email === null){
	res.send(400);
    }
    else{
	mongo.Db.connect(mongoUri, function (err, db) {
	    db.collection('mydocs', function (er, collection) {
		var userEmail = req.body.email;
		var newTrip = req.body.trip;
		var user = collection.find({email: userEmail}).toArray(function(errr, x){
		    if(x.length == 0){
			collection.insert({"email": userEmail, "trips": [newTrip]}, function (err, r){});
			console.log("New");
			res.send();
		    }
		    else{
			newX = x[0];
			newX.trips[x[0].trips.length] = newTrip;
			collection.remove({"email": userEmail}, 1, function(){});
			console.log(newX);
			collection.insert(newX, function(errrr, rr){});
		    }
		});
	    });
	});
    }
    res.send();
});

app.get('/user.json', function(req, res){
    if(req.query.email === undefined || req.query.email === null){
	res.send(400);
    }
    mongo.Db.connect(mongoUri, function (err, db) {
	db.collection('mydocs', function (er, collection) {
	    var c = collection.find({"email": req.query.email}).toArray(function(errr, x){
		console.log(x);
		res.send(x);
	    });
	});
    });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
