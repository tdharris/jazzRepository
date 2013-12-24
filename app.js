var Hapi = require('hapi')
	, snippets = require('./routes/snippets')
	, routes = require('./routes/routes');
var config = require('./config/config');

var options = {};

var server = new Hapi.Server(config.dev.ip, parseInt(config.dev.port, 10, options));
server.pack.require({ lout: { endpoint: '/docs' } }, function (err) {
    if (err) {
        console.log('Failed loading plugins');
    }
});

server.views({
    engines: { jade: 'jade' },
    path: 'views',
    compileOptions: {
        pretty: true
    }
});

// Routes
server.addRoutes(snippets);
server.addRoutes(routes);

server.start(
	console.log("Server started at " + server.info.uri)
);

