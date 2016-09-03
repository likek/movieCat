'use strict';

angular.module('myApp.top250', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/top250/:page', {
    templateUrl: 'top250/view.html',
    controller: 'top250_Ctrl'
  });
}])

.controller('top250_Ctrl',['$scope', 'service_jsonp', '$routeParams', '$route', function ($scope, service_jsonp, $routeParams, $route) {
	$scope.massage = '';
	$scope.loading = true;
	$scope.currentPage = $routeParams.page;
	var count = 4
		, start = ($scope.currentPage - 1) * count;
	service_jsonp.newjsonp('https://api.douban.com/v2/movie/top250', {
		"start": start
		, "count": count
	}, function (data) {
		$scope.subjects = data.subjects;
		$scope.totalC = data.total;
		$scope.totalPage = Math.ceil(data.total / count);
		$scope.loading = false;
		$scope.$apply();
	})
	$scope.go = function (page) {
			if ($scope.currentPage >= 1 && $scope.currentPage <= $scope.totalPage) {
				$route.updateParams({
					'page': page
				});
			}
		}
}]);
