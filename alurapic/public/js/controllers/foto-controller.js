angular.module('alurapic')
    .controller('FotoController', function($scope, recursoFoto, cadastroDeFoto, $routeParams) {

        $scope.foto = {};
        $scope.mensagem = '';

        if ($routeParams.fotoId) {
            recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
                $scope.foto = foto;
            }, function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto';
            });
        }

        $scope.submeter = function() {

            if ($scope.formulario.$valid) {

                cadastroDeFoto.cadastrar($scope.foto)
                .then(function(dados) {
                    $scope.mensagem = dados.mensagem;
                    if(dados.inclusao) $scope.foto = {};
                })
                .catch(function(dados) {
                    $scope.mensagem = dados.mensagem;
                });

            }
        }
    
});