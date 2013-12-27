var jade = require('jade');

var getHome = {
	handler: function(request) {
		request.reply.view('index', { title: 'Hello', message: 'there!'});
	}
};

var getLibrary = {
	handler: function(request) {
		var snippets = [{
		        id: 1,
		        artist: 'Kenny Garrett',
		        tags: ['ii-V']
		    },
		    {
		        id: 2,
		        artist: 'Miles Davis',
		        tags: ['blues']
		    },
		    {
		        id: 3,
		        artist: 'Joe Henderson',
		        tags: ['sus']
		    },
		    {
		        id: 4,
		        artist: 'Sonny Rollins',
		        tags: ['ii-V']
		    },
		    {
		        id: 5,
		        artist: 'Kenny Garrett',
		        tags: ['ii-V']
		    },
		    {
		        id: 6,
		        artist: 'Kenny Garrett',
		        tags: ['ii-V']
		    }
		];
		request.reply.view('library', { title: 'Snippets Library', snips: snippets });
	}
};

module.exports = [
    { method: 'GET', path: '/', config: getHome },
    { method: 'GET', path: '/library', config: getLibrary },
    {
	    method: 'GET',
	    path: '/{path*}',
	    handler: {
	        directory: { path: './public', listing: false, index: true }
	    }
	}
];


