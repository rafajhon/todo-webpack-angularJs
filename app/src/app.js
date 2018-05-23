import './scss/app.scss';

import angular from 'angular';
import bootstrap from 'bootstrap';
import uirouter from '@uirouter/angularjs';

import listaTelefonicaController from './js/controllers/ListaTelefonicaController';
import adicionarContatoController from './js/controllers/AdicionarContatoController';
import requestService from './js/services/requestService'
import routes from './routes'


var ngModule = angular.module('app', [uirouter]);
ngModule.config(routes);
ngModule.service('requestService', requestService);
ngModule.controller('listaTelefonicaController', listaTelefonicaController);
ngModule.controller('adicionarContatoController', adicionarContatoController);
