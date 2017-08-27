var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// person route
var person = require('./routes/person');
app.use('/person', person);

// only for test
app.get('/', function(req, res) {
	res.send("Home");
});

app.listen(3000, function(err) {
	if (err) return console.log(err);
	return console.log("Server running on port 3000");
});

module.exports = app;
