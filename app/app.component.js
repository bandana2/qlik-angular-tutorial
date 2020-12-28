'use strict';
angular.module('myAngularapp')
.config(function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})
.value('$routerRootComponent', 'app')
.component('app',{
    templateUrl: 'app/carousel/carousel.template.html',
    $routeConfig: [
      {path: '/dynamic-search/...', name: 'DynamicSearch', component: 'searchBar', useAsDefault: true},
      {path: '/heroes/...', name: 'Heroes', component: 'heroes' }
    ],
    controller:[
        
    ]

})