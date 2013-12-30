var myApp = angular.module('snippetsLib', []);

myApp.factory('snippetsFactory', function($http) {
	return {
      getSnippetsAsync: function(callback) {
          $http.get('snippets').success(callback);
      }
  };
});

myApp.controller('SnippetsCtrl', function($scope, snippetsFactory) {
  snippetsFactory.getSnippetsAsync(function(results) {
      console.log('SnippetsCtrl async returned value: ' + results);
      $scope.Snippets = results;
  });
});