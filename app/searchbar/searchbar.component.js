'use strict';
angular.module('searchBar').
component('searchBar',{
    templateUrl: 'app/searchbar/searchbar.template.html',
    // templateUrl:'app/searchbar/searchbarselectui.template.html',
    controller:[
        'QlikService','NLPService', function ( QlikService,NLPService) {
            // Methods
        var self = this;
        self.hidelist=true;
         self.getQlikObj = function getQlikObj(){
           
            console.log(NLPService.getResponse('what is the mvr for egypt country'))
            console.log(`self.query:${self.query}`)
            // console.log(`qlik output" ${JSON.stringify(QlikService.embedObject('QV01', 'jRSzYp'))}`);
           if (['data availability quarterly trend',
           'data availability split by phase',
           'data availability split by du',
           'data availability breakup',
           'data availability data not available',
           'data availability delay in data',
           'data availability study details',
           'global library catalog quarterly trend',
           'global library catalog split by study status',
           'global library catalog split by year',
           'global library catalog split by phase',
           'global library catalog study details',
           'overall summary global library catalog',
           'overall summary dbl to final stats',
           'overall summary dbl to planned outputs'
        ].includes(self.query)){
            
            QlikService.embedObject(QlikService.getAppName('DOMM'),'QV00','CurrentSelections')
            QlikService.embedObject(QlikService.getAppName('DOMM'),'QV01',QlikService.getChartName('DOMM',self.query))
            QlikService.embedObject(QlikService.getAppName('DOMM'),'chartTitle',QlikService.getChartName('DOMM',self.query)).then(model=>self.chartTitle=model.layout.title)
            // console.log(QlikService.toggledObject(QlikService.getAppName('DOMM'),'QV01',QlikService.getChartName('DOMM',self.query)))
           } else if(['chart1','chart2'].includes(self.query)){
            QlikService.embedObject(QlikService.getAppName('Analysis'),'QV00','CurrentSelections')
            QlikService.embedObject(QlikService.getAppName('Analysis'),'QV01',QlikService.getChartName('Analysis',self.query))
           } else {
           {"QV01","Not Results Found"}
           }
          
           

    
        },

        self.toggleQlikObj = function toggleQlikObj(){
            console.log('component click on toggle');
            QlikService.toggledObject(QlikService.getAppName('DOMM'),'QV01',QlikService.getChartName('DOMM',self.query))
        },
        self.dataDownload = function dataDownload(){
            QlikService.downloadData(QlikService.getAppName('DOMM'),'QV01',QlikService.getChartName('DOMM',self.query))
        },

        self.searchFor= function searchFor(){
            console.log(self.searchList)
            self.searchList= ["test 1","Test 2","Test 3","Test 4"]
        },

        self.disabled = undefined;

        self.enable = function() {
            self.disabled = false;
        };
      
        self.disable = function() {
            self.disabled = true;
        };
      
        self.clear = function() {
            self.person.selected = undefined;
            self.address.selected = undefined;
      
        };
      
        self.person = {};
        self.people = [
          { name: 'Adam',      email: 'adam@email.com',      age: 10 },
          { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
          { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
          { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
          { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
          { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
          { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
          { name: 'Adrian',    email: 'adrian@email.com',    age: 21 },
           { name: 'nagesh',    email: 'adrian@email.com',    age: 21 }
        ];
      
    }   
    
    ]

})