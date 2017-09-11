angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) { 
    //Array que irá retornar para a view com os objetos retornado do back
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    //requisição get que, se sucesso, retornará um array com os objetos javascript (JSON) do back
    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro);
    });

    //remove foto de acordo com o id vindo da view na requisição de deleção
    $scope.remover = function(foto) {
        recursoFoto.delete({fotoId: foto._id}, function() {
            //lógica para remover a foto da lista de fotos da view
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
        }, function() {
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        });
    };

});