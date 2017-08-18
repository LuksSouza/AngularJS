angular.module('alurapic').controller('FotosController', function($scope, $http) { 
    
    //Array que irá retornar para a view com os objetos retornado do back
    $scope.fotos = [];

    //requisição get que, se sucesso, retornará um array com os objetos javascript (JSON) do back
    $http.get('/v1/fotos')
    .success(function (retorno) {
        $scope.fotos = retorno;
    })
    .error(function(error) {
        console.log(error);
    });

});