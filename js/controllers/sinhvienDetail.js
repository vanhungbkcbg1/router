/**
 * Created by hungnv on 2/5/2017.
 */
mainApp.controller('SinhvienDetailController',['sinhvienservice','$scope','$routeParams',function(sinhvienservice,$scope,$routeParams){

    $scope.sinhvien={};
    $scope.detail= function () {

        var id=$routeParams.id;
        sinhvienservice.api().get({id:id}, function (data) {

            $scope.sinhvien=data;
            console.log(data);
        });

    };

    $scope.detail();

    $scope.id=$routeParams.id;
}]);