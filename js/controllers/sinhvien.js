/**
 * Created by hungnv on 2/5/2017.
 */
mainApp.controller('sinhvienController',['sinhvienservice','$scope',function(sinhvienservice,$scope){

    $scope.sinhviens=[];
    $scope.getAll= function () {

        sinhvienservice.api().query(function (data) {

            $scope.sinhviens=data;
        });

    };

    $scope.getDetail= function (id) {
        console.log(id);
        sinhvienservice.api().get({id:id}, function (data) {

            $scope.sinhvien=data;
        });
    };

    $scope.custom={
        name:'vanhung',
        age:28
    };
    //
    $scope.getAll();
    //
    //
    console.log('run');
}]);