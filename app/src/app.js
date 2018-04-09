import angular from 'angular'


import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'bootstrap';
import css from './style/app.css';
// import listaTelefonicaController from './controllers/listaTelefonicaController.js';
$('.dropdown-toggle').dropdown();
var ngModule = angular.module('app', []);
ngModule.controller('listaTelefonicaController',['$scope',function ($scope){
    $scope.test = 'Hola!';
}]);
