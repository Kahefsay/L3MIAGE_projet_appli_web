angular.
    module('poserquestion').
    component('poserquestion', {
        templateUrl: 'components/poserquestion/poserquestion.template.html',
        controller: function PoserQuestionController($scope, $http, $utilisateurCourant, $question) {

            var utilisateurID = $utilisateurCourant.getUser().UtilisateurID;

            $scope.creation = false;

            $scope.question = {
                UtilisateurID: utilisateurID
            }

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    $question.createQuestion($http, $scope.question)
                        .then(data => {
                            $scope.creation = true;
                        })
                        .catch(function (fallback) {
                            $scope.erreur = "Un problème interne est survenu, \n veuillez réessayer plus tard.";
                        });
                }
            }

            $scope.nouvelleQuestion = function() {
                $scope.creation = false; 
                $scope.question = {
                    UtilisateurID: utilisateurID,
                    Contenu: ""
                }
            }

        }
    });