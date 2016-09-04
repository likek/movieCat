'use strict';

angular.module('myApp.movie_list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:type/:page', {
    templateUrl: 'movie_list/view.html',
    controller: 'movie_list_Ctrl'
  });
}])

.controller('movie_list_Ctrl', ['$scope', 'service_jsonp', '$routeParams', '$route', function ($scope, service_jsonp, $routeParams, $route) {
	$scope.massage = '';
	$scope.loading = true;
	$scope.currentPage = $routeParams.page;
	var count = 4
		, start = ($scope.currentPage - 1) * count;
	service_jsonp.newjsonp('https://api.douban.com/v2/movie/'+$routeParams.type, {
		"start": start
		, "count": count
		, "q": $routeParams.q
	}, function (data) {
		$scope.subjects = data;
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
