var jade = require('jade');

var getHome = {
	handler: function(request) {
		request.reply.view('index', { title: 'Hello', message: 'there!'});
	}
};

var getLibrary = {
	handler: function(request) {
		request.reply.view('library');
	}
};

var getNewSnippet = {
	handler: function(request) {
		request.reply.view('newSnippet');
	}
}

module.exports = [
    { method: 'GET', path: '/', config: getHome },
    { method: 'GET', path: '/library', config: getLibrary },
    { method: 'GET', path: '/newSnippet', config: getNewSnippet },
    {
	    method: 'GET',
	    path: '/{path*}',
	    handler: {
	        directory: { path: './public', listing: false, index: true }
	    }
	}
];