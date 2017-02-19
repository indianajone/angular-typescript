import * as angular from 'angular';
import home from './home/home';

let views = angular.module('app.views', [
        home
    ]).name;

export default views;
