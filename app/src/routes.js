routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('contatos', {
      url: '/contato/listar',
      template: require('./views/listaContatos.html'),
      controller: 'listaTelefonicaController',
      controllerAs: 'listaTelefonicaController'
    });
  $stateProvider.state('adicionarContato', {
      url: '/contato/adicionar',
      template: require('./views/novoContato.html'),
      controller: 'adicionarContatoController',
      controllerAs: 'adicionarContatoController'
    });
}
