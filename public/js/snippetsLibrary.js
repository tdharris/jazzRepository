var myApp = angular.module('snippetsLib', []);

myApp.factory('Snippets', function() {
	var Snippets = {};
	Snippets.library = [
		{
	        id: 1,
	        artist: 'Kenny Garrett',
	        tags: ['ii-V','sus']
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
	return Snippets;
})

function SnippetsCtrl($scope, Snippets) {
	$scope.Snippets = Snippets;
}