var myApp = angular.module('snippetsLib', []);

myApp.factory('snippetsFactory', function($http) {
	return {
      getSnippetsAsync: function(callback) {
      	$( "div.loader" ).last().addClass( "loading-overlay" );
		    $http.get('snippets').success(callback);
      }
  };
});

myApp.controller('SnippetsCtrl', function($scope, snippetsFactory) {
  snippetsFactory.getSnippetsAsync(function(results) {
  	$( "div.loader" ).last().removeClass( "loading-overlay" );
  	console.log('SnippetsCtrl async returned value: ' + results);
  	$scope.Snippets = results;
  });
});