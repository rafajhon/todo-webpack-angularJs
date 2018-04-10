export default class ListaTelefonicaController {

    constructor($scope) {
        this._scope = $scope;
        this.contatos = this._scope.contatos = [];
        this._scope.titulo = "Lista de contatos";
    }

    remove(contato){
        alert(contato);
    }

    testeAdicionarContato(){
        this.contatos.push({id:1, nome:'teste',telefone:'999999-9999'});
    }
}
