// web.js
var express = require("express");
var logfmt = require("logfmt");
var mongo = require('mongodb');
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

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + 'public'));

//app.get('/', routes.login);

app.get('/', function(req, res) {
  res.sendfile('./pages/login.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
