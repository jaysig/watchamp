var express = require('express');
var bodyParser = require('body-parser');
var config = require('./server/config/config');
var mongoose = require('mongoose');

// Connect to DB
if (process.env.MONGOLAB_URI) {
  mongoose.connect(process.env.MONGOLAB_URI);
} else {
  mongoose.connect(config.url);
}

var connectDB = mongoose.connection;
connectDB.on('error', console.error);
connectDB.once('open', function() {
  console.log('Connected to database!');
  startServer();
});



var app = express();

require('./server/config/middleware.js')(app, express);

function startServer() {
  var server = app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });  
}


module.exports = app;