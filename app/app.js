'use strict';
// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute'
  ,'myApp.movie_list'
  ,'module_service'
  ,'module_auto_focus'
]).
config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/in_theaters/1'
	});
}]);
