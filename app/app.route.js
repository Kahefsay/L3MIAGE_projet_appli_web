angular.
  module('MiageToulouse').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
            template: '<accueil></accueil>'
        }).
        when('/formation', {
            template : '<formation></formation>'
        }).
        when('/alternance', {
            template : '<alternance></alternance>'
        }).
        when('/connexion', {
            template : '<connexion></connexion>'
        }).
        when('/inscription', {
            template : '<inscription></inscription>'
        })
    }
  ]);