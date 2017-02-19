import * as angular from 'angular';
import HomeController from './home.controller';

let home = angular.module('home', [
    require('angular-ui-router')
])
.config(($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider.state('app.home', {
        url: '/home',
        template: '<home></home>'
    });
})
.component('home', {
    controller: HomeController,
    template: require('./home.html')
}) .name;

export default home;
