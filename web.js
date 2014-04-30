// web.js
var express = require("express");
var mongo = require('mongodb');
var connect = require('connect');
var bodyParser = require('body-parser');

var app = express();

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';

app.use(bodyParser());

app.get('/', function(req, res) {
    res.sendfile('./public/login.html');
});

app.get('/login.html', function(req, res) {
    res.sendfile('./public/login.html');
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

app.get('/bootstrap.min.css', function(req, res){
    res.sendfile('./public/css/bootstrap.min.css');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
