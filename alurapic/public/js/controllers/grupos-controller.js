angular.module('alurapic')
    .controller('GruposController', function($scope, $http) {

        $scope.grupos = [];

        $http.get('/v1/grupos')
        .success(function(grupos){
            $scope.grupos = grupos;
            console.log('Grupos carregados com sucesso!');
        })
        .error(function(erro) {
            console.log(erro);
        });

    });