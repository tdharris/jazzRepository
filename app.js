var Hapi = require('hapi')
	, snippets = require('./routes/snippets')
	, routes = require('./routes/routes')
	, types = require('hapi').Types;
var config = require('./config/config');

var server = new Hapi.Server(config.dev.ip, parseInt(config.dev.port, 10));
server.pack.require({ lout: { endpoint: '/docs' } }, function (err) {
    if (err) {
        console.log('Failed loading plugins');
    }
});

// Routes
server.addRoutes(snippets);
server.addRoutes(routes);

server.start(
	console.log('Server listening on ' + config.dev.ip + ' and port: ' + config.dev.port)
);