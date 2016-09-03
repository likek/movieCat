var jsonp=angular.module('module_service',[]);
jsonp.service('service_jsonp',['$window','$document',function($window,$document){
	this.newjsonp=function(url,config,callback){
		var cbFunctionName='cbFunctionName'+parseInt(Math.random()*10000000);
		$window[cbFunctionName]=callback;
		var queryString=url.indexOf('?')==-1 ? '?' : '&';
		for(var item in config){
			queryString+=item+'='+config[item]+'&';
		}
		var script=$document[0].createElement('script');
		script.src=url+queryString+'callback='+cbFunctionName;
		$document[0].body.appendChild(script);
	}
}])
