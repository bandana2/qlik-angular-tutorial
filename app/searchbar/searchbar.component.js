'use strict';
angular.module('searchBar').
component('searchBar',{
    templateUrl: 'app/searchbar/searchbar.template.html',
    controller:[
        'QlikService','NLPService', function ( QlikService,NLPService) {
            // Methods
        var self = this;
        
         self.getQlikObj = function getQlikObj(){
           
            console.log(NLPService.getResponse('what is the mvr for egypt country'))
            console.log(`self.query:${self.query}`)
            // console.log(`qlik output" ${JSON.stringify(QlikService.embedObject('QV01', 'jRSzYp'))}`);
           if (['data availablity','red category','red distributon', 'split by phase', 'split by du'].includes(self.query)){
            
            QlikService.embedObject(QlikService.getAppName('DOMM'),'QV00','CurrentSelections')
         QlikService.embedObject(QlikService.getAppName('DOMM'),'QV01',QlikService.getChartName('DOMM',self.query))
            QlikService.embedObject(QlikService.getAppName('DOMM'),'QV01',QlikService.getChartName('DOMM',self.query)).then(model=>this.chartTitle=model.layout.title)
            // console.log(QlikService.toggledObject(QlikService.getAppName('DOMM'),'QV01',QlikService.getChartName('DOMM',self.query)))
           } else if(['chart1','chart2'].includes(self.query)){
            QlikService.embedObject(QlikService.getAppName('Analysis'),'QV00','CurrentSelections')
            QlikService.embedObject(QlikService.getAppName('Analysis'),'QV01',QlikService.getChartName('Analysis',self.query))
           }
          
           

    
        },

        self.toggleQlikObj = function toggleQlikObj(){
            console.log('component click on toggle');
            QlikService.toggledObject(QlikService.getAppName('DOMM'),'QV01',QlikService.getChartName('DOMM',self.query))
        },
        self.dataDownload = function dataDownload(){
            QlikService.downloadData(QlikService.getAppName('DOMM'),'QV01',QlikService.getChartName('DOMM',self.query))
        }
    }   
    
    ]

})