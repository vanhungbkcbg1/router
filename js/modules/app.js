/**
 * Created by hungnv on 2/5/2017.
 */



var mainApp = angular.module("mainApp", ['ngRoute', 'ngResource']);
mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/blue', {
        templateUrl: 'views/blue.html',
        controller: 'sinhvienController'
    }).when('/sinhviens', {
        templateUrl: 'views/sinhviens.html',
        controller: 'sinhvienController'
    }).when('/sinhviens/:id',{

        templateUrl: 'views/sinhvien_detail.html',
        controller: 'SinhvienDetailController'
    }).otherwise({
        redirectTo: '/blue'
    });
}]);
