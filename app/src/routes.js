routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('contatos', {
      url: '/contatos',
      template: require('./views/listaContatos.html'),
      controller: 'listaTelefonicaController',
    });
  $stateProvider.state('adicionarContato', {
      url: '/contato/adicionar',
      template: require('./views/novoContato.html'),
      controller: 'listaTelefonicaController',
    });
}
