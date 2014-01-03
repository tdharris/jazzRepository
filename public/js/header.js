var myApp = angular.module('headerModule', []);

myApp.factory('headerFactory', function($scope) {
	return {
      HeaderController: function($scope, $location) { 
		    $scope.isActive = function (viewLocation) { 
		        return viewLocation === $location.path();
		    };
		}
  };
});

myApp.controller('HeaderController', function(headerFactory) {
  headerFactory.HeaderController();
});