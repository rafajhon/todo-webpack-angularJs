import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import jquery from 'jquery';
import popper  from 'popper.js'
import 'bootstrap';

window.$ = window.jQuery = jquery;
window.Popper = popper;

import css from './style/app.css';
import listaTelefonicaController from './js/controllers/ListaTelefonicaController';
import adicionarContatoController from './js/controllers/AdicionarContatoController';
import routes from './routes'
var ngModule = angular.module('app', [uirouter]);
ngModule.config(routes);
ngModule.controller('listaTelefonicaController',listaTelefonicaController);
ngModule.controller('adicionarContatoController',adicionarContatoController);
