var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://hlsummerblog.firebaseIO.com");
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/static/html/index.html'))
});

app.listen(8000, function () {
	console.log('Example app listening on port 3000!');
});

app.use(express.static('static'));
app.use(express.static('bower_components/bootstrap'))

myFirebaseRef.set({
	words: "Hello World~",
	name: "Hanah"
});
