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
        })
    }
  ]);