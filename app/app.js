'use strict';
// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute'
  , 'myApp.coming_soon'
  , 'myApp.in_theater'
  , 'myApp.top250'
]).
config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/in_theater/1'
	});
}]);
