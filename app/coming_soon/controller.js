'use strict';

angular.module('myApp.coming_soon', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coming_soon/:count', {
    templateUrl: 'coming_soon/view.html',
    controller: 'coming_soon_Ctrl'
  });
}])

.controller('coming_soon_Ctrl', [function() {

}]);
