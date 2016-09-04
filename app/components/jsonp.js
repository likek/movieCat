var jsonp = angular.module('service_jsonp', []);
jsonp.service('service_jsonp', ['$window', '$document', function ($window, $document) {
	this.newjsonp = function (url, config, callback) {
		var queryString = url.indexOf('?') == -1 ? '?' : '&';
		if (3 == arguments.length) {
			for (var item in config) {
				queryString += item + '=' + config[item] + '&';
			}
		}else if(2 == arguments.length){
			callback=config;
		}
		var cbFunctionName = 'cbFunctionName' + parseInt(Math.random() * 10000000);
		$window[cbFunctionName] = function (data) {
			callback(data);
			$document[0].body.removeChild(scriptEle);
		}
		var scriptEle = $document[0].createElement('script');
		scriptEle.src = url + queryString + 'callback=' + cbFunctionName;
		$document[0].body.appendChild(scriptEle);
	}
}])
