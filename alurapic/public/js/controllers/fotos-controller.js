angular.module('alurapic').controller('FotosController', function($scope, $http) { 
    
    //Array que irá retornar para a view com os objetos retornado do back
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    //requisição get que, se sucesso, retornará um array com os objetos javascript (JSON) do back
    $http.get('/v1/fotos')
    .success(function (retorno) {
        $scope.fotos = retorno;
    })
    .error(function(error) {
        console.log(error);
    });

    $scope.remover = function(foto) {
        $http.delete('/v1/fotos/' + foto._id)
        .success(function() {
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            console.log('Foto removida com sucesso!');
            $scope.mensagem = 'Foto ' + foto.titulo + 'removida com sucesso!';
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
            console.log('Não foi possível apagar a foto ' + foto.titulo);
        });
    };

});