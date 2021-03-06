'use strict';
export default class ListaTelefonicaController {

    constructor($scope, $http,$transition$,requestService ){
        this._scope = $scope;
        this._http = $http;
        this._scope.contatos = [];
        this.carregaContatos(); 
        this._scope.titulo = "Lista de contatos";
        requestService.request();
    }

    remove(contato){
        alert(contato);
    }

    carregaContatos(){
        const url = "http://localhost:8000/agenda/listar"
        var self  = this;
        this._http.get(url).then(function (data, status) {
            self._scope.contatos = data.data.content.contatos
        },function (error) {
             console.error('Falha ao tentar realizar o request', error);
        })
    }

}
