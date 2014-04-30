// web.js
var express = require("express");
var mongo = require('mongodb');
var connect = require('connect');

var app = express();

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';



/* Mongo connection example:
mongo.Db.connect(mongoUri, function (err, db) {
    db.collection('mydocs', function (er, collection) {
	collection.insert({'mykey': 'myvalue'}, {safe: true}, function (er, rs) {
	});
    });
});
*/

app.get('/', function(req, res) {
    res.sendfile('./public/login.html');
});

app.post('/post.json', function(req, res){
    console.log(req);
    /*if(req.body.email === undefined || req.body.email === null){
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

		var user = collection.find({email: userEmail});
		
		console.log(user);
		
		res.send();
	    });
	});
    }*/
    res.send();
});

app.get('/bootstrap.min.css', function(req, res){
    res.sendfile('./public/css/bootstrap.min.css');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
