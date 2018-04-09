import angular from 'angular';
import ngRoute from 'angular-route'
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'bootstrap';
import css from './style/app.css';
import listaTelefonicaController from './js/controllers/ListaTelefonicaController';
import configRoutes from './js/config/routerConfig'

var ngModule = angular.module('app', ['ngRoute']);
console.log(configRoutes);
ngModule.config(configRoutes);
ngModule.controller('listaTelefonicaController',listaTelefonicaController);
