angular.module('myApp.movie_detail',[]).config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/detail/:id',{
		templateUrl:'movie_detail/view.html',
		controller:'movie_detail_Ctrl'
	})
}]).controller('movie_detail_Ctrl',['$scope','$routeParams','service_jsonp','myAppConfig',function($scope,$routeParams,service_jsonp,myAppConfig){
	var id=$routeParams.id;
	$scope.loading=true;
	$scope.subjects={
		title:'loading...',
		summary:'loading...'
	}
	service_jsonp.newjsonp(myAppConfig.detailAddr+id,function(data){
		$scope.subjects=data;
		$scope.loading=false;
		$scope.$apply();
	})
}])
