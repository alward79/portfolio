var express = require('express')
var body_parser = require('body-parser')
var app = express()

//config
var port = 3000;

app.use(body_parser.json())

app.use('/api', require('../routes/api.js')(express))

var server = app.listen(port, function() {
	console.log('Server Active on', port);
});

module.exports = server; 