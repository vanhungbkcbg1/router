/**
 * Created by hungnv on 2/5/2017.
 */
mainApp.service('sinhvienservice',['$resource', function ($resource) {

    var baseURL='http://localhost:81';
    this.api= function () {
        return $resource(baseURL+'/api/sinhviens/:id',{id:'@id'});
    }
}]) ;