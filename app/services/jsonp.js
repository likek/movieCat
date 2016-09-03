var jsonp=angular.module('module_service',[]);
jsonp.service('service_jsonp',['$window','$document',function($window,$document){
	this.newjsonp=function(url,config,callback){
		$window['cbFunctionName']=callback;
		var queryString=url.indexOf('?')==-1 ? '?' : '&';
		for(var item in config){
			queryString+=item+'='+config[key];
		}
		var script=$document[0].createElement('script');
		script.src=url+queryString+'&callback=cbFunctionName';
		$document[0].body.appendChild(script);
	}
}])
