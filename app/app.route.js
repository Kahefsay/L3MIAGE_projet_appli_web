angular.
  module('MiageToulouse').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'index.html'
        }).
        when('/formation', {
            template : '<formation></formation>'
        })
    }
  ]);