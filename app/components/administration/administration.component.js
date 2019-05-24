angular.
    module('administration').
    component('administration', {
        templateUrl: 'components/administration/administration.template.html',
        controller: function AdministrationController($scope, $http, $utilisateur) {

            $utilisateur.getAllUserExceptCollaborateur($http)
                .then(data => {
                    if (data != null) {
                        $scope.users = data;
                    }
                });;

            $scope.updateRole = function (user) {
                $utilisateur.updateRoleUser($http, user)
                    .then(data => {
                        console.log(data);
                    })
            }
        }
    });