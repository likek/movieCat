'use strict';
// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute'
  ,'myApp.movie_detail'
  ,'myApp.movie_list'
  ,'service_jsonp'
  ,'directive_auto_focus'
]).constant('myAppConfig',{
	listCount:4,
	listAddr:'https://api.douban.com/v2/movie/',
	detailAddr:'https://api.douban.com/v2/movie/subject/'
}).
config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/in_theaters/1'
	});
}]).controller('main_search',['$scope','$route',function($scope,$route){
	$scope.searchInp='';
	$scope.search=function(){
		$route.updateParams({
			type:'search',
			q:$scope.searchInp
		})
		$scope.searchInp='';
	}
}]);
