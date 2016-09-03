'use strict';

angular.module('myApp.coming_soon', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coming_soon/:page', {
    templateUrl: 'coming_soon/view.html',
    controller: 'coming_soon_Ctrl'
  });
}])

.controller('coming_soon_Ctrl', ['$scope', 'service_jsonp', '$routeParams', '$route', function ($scope, service_jsonp, $routeParams, $route) {
	$scope.massage = '';
	$scope.loading = true;
	$scope.currentPage = $routeParams.page;
	var count = 4
		, start = ($scope.currentPage - 1) * count;
	service_jsonp.newjsonp('https://api.douban.com/v2/movie/coming_soon', {
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
