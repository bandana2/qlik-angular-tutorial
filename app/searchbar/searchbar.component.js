'use strict';
angular.module('searchBar').
component('searchBar',{
    templateUrl: 'app/searchbar/searchbar.template.html',
    controller:[
        'QlikService', function ( QlikService) {
            // Methods
        var self = this;
     
         self.getQlikObj = function(){
           
            console.log(`self.query:${self.query}`)
            // console.log(`qlik output" ${JSON.stringify(QlikService.embedObject('QV01', 'jRSzYp'))}`);
           QlikService.embedObject('QV01',self.query).then(QV1 => {
            self.QV1 = QV1})  
            self.QV0=QlikService.embedObject('QV00','CurrentSelections')
    
        }
    }   
    
    ]

})