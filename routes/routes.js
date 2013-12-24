var jade = require('jade');

// Asset handling with Hapi - hapikachu
var getHome = {
	handler: function(request) {
		request.reply.view('index', { title: 'Hello', message: 'there!'});
	}
};

module.exports = [
    { method: 'GET', path: '/', config: getHome },
    {
	    method: 'GET',
	    path: '/{path*}',
	    handler: {
	        directory: { path: './public', listing: false, index: true }
	    }
	}
];


