'use strict';

angular.module('myApp.in_theater', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/in_theaters/:id', {
    templateUrl: 'in_theaters/view.html',
    controller: 'in_theater_Ctrl'
  });
}])

.controller('in_theater_Ctrl', [function() {

}]);
