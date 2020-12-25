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
           if (['data availablity','red category'].includes(self.query)){
            
            QlikService.embedObject(QlikService.getAppName('DOMM'),'QV00','CurrentSelections')
            QlikService.embedObject(QlikService.getAppName('DOMM'),'QV01',QlikService.getChartName('DOMM',self.query))
           } else if(['chart1','chart2'].includes(self.query)){
            QlikService.embedObject(QlikService.getAppName('Analysis'),'QV00','CurrentSelections')
            QlikService.embedObject(QlikService.getAppName('Analysis'),'QV01',QlikService.getChartName('Analysis',self.query))
           }
          
           

    
        }
    }   
    
    ]

})