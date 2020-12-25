'use strict';

    // Register
    angular
        .module('qlikApp')
        .service('NLPService', NLPService);

        NLPService.$inject = ['$http'];
        // Construct
    function NLPService($http,$xhr) {

    var self = this;
    this.getResponse=getResponse;

    function getResponse(q){
        delete $http.defaults.headers.common['X-Requested-With'];
        const uri = 'http://localhost:80/products'
        const auth = 'Bearer ' + 'YJE55A2VCCEE7O54RW2MSJXJSTHUZDBQ';
        var headers1 = {
            // 'Authorization': auth,
           'Access-Control-Allow-Origin': "*",
           'withCredentials':false
        //    'Content-Type': 'application/json; charset=utf-8',
        //    "X-Requested-With": "XMLHttpRequest"
             }
        

    //     $http.get(uri)
    //     .then(function(response) {
    //       return response.data;
    // })

    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'http://localhost:80/products', true);
    // xhr.withCredentials = true;
    // xhr.send(null);

}
	
    }