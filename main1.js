var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );


var config = {
    host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
    
};

// const baseUrl = ( config.isSecure ? 'https://' : 'http://' ) + config.host + (config.port ? ':' + config.port : '') + config.prefix;
require.config({
  // baseUrl: `${baseUrl}resources`,
  baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources",
  // webIntegrationId: config.webIntegrationId// only needed in QCS and QSEoK
  paths: {
    myAngularapp: "../extensions/angular-tutorial/app/app.module" //update this path according to your environment
}
   
  
});

require(["js/qlik"], function (qlik) {
  require(["angular", "myAngularapp"], function (angular) {
    angular.bootstrap(document, ["myAngularapp", "qlik-angular"]);
    // console.log(angular.version)
  });
});