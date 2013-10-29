var express = require('express'),
    bootstrap = require('./init/bootstrap.js'),
    app = module.exports = express.createServer();

bootstrap(app);

var server = app.listen(3000);
console.log('Express server started on port %s', server.address().port);