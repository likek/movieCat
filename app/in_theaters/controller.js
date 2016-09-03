'use strict';
angular.module('myApp.in_theater', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/in_theaters/:id', {
    templateUrl: 'in_theaters/view.html',
    controller: 'in_theater_Ctrl'
  });
}])

.controller('in_theater_Ctrl', ['$scope','service_jsonp',function($scope,service_jsonp) {
	$scope.massage='';
	service_jsonp.newjsonp('https://api.douban.com/v2/movie/in_theaters',{},function(data){
		$scope.subjects=data.subjects;
		$scope.$apply();
	})
}]);
