var Hapi = require('hapi');

var snippets = require('./routes/snippets');
var types = require('hapi').Types;

process.env.PORT = 3000;
var config = { };
var server = new Hapi.Server('0.0.0.0', parseInt(process.env.PORT, 10), config);
server.pack.require({ lout: { endpoint: '/docs' } }, function (err) {

    if (err) {
        console.log('Failed loading plugins');
    }
});

server.addRoutes(snippets);

server.start(
	console.log('Server listening on port: ' + process.env.PORT)
);