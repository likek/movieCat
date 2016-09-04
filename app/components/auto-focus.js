var autofocus=angular.module('module_auto_focus',[]);
autofocus.directive('autoFocus',['$location',function($location){
	return {
		restrict:'A',
		link:function($scope,elem,attr,controller){
			$scope.$location=$location;
			$scope.$watch('$location.path()',function(now){
				var aEle=elem.children().attr('href');
//				console.log(aEle);
				if(aEle!=undefined){
					var currentPath=aEle.substr(1);
				}
				if(now.startsWith(currentPath)){
					elem.parent().children().removeClass('active');
					elem.addClass('active');
				}
			})
		}
	}
}])
