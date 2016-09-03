'use strict';

angular.module('myApp.top250', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/top250/:page', {
    templateUrl: 'top250/view.html',
    controller: 'top250_Ctrl'
  });
}])

.controller('top250_Ctrl', [function() {

}]);
