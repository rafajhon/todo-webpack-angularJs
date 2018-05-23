export default class adicionarContatoController {

    constructor($scope, $http, $state) {
        this._scope = $scope;
        this._http = $http;
        this._state = $state;
        this._scope.titulo = "Adicionar Contatos";
    }

    adicionaContato(){
        var self = this;
        const url = "http://localhost:8000/agenda/adicionar"
        this._http.post(url, JSON.stringify(self._scope.contato)).then(function(data) {
            self._state.go('contatos',{mesagem:data.data.content.mensagem});
        },function (error) {
             console.error('Falha ao tentar realizar o request', error);
        })
    }
}
