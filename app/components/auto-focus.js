var autofocus=angular.module('module_auto_focus',[]);
autofocus.directive('autoFocus',['$location',function($location){
	var path=$location.path();
	return {
		restrict:'A',
		link:function($scope,elem,attr,controller){
			var aEle=elem.children().attr('href');
			var currentPath=aEle.substr(1);
//			console.log(currentPath);
			if(path.startsWith(currentPath)){
				elem.addClass('active');
			}
			elem.on('click',function(){
				elem.parent().children().removeClass('active');
				elem.addClass('active');
			})
		}
	}
}])
