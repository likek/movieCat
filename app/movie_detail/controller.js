angular.module('myApp.movie_detail',[]).config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/detail/:id',{
		templateUrl:'movie_detail/view.html',
		controller:'movie_detail_Ctrl'
	})
}]).controller('movie_detail_Ctrl',['$scope','$routeParams','service_jsonp',function($scope,$routeParams,service_jsonp){
	var id=$routeParams.id;
	$scope.subjects={
		title:'loading...',
		summary:'loading...'
	}
	service_jsonp.newjsonp('https://api.douban.com/v2/movie/subject/'+id,{},function(data){
		$scope.subjects=data;
		$scope.$apply();
	})
}])
