import * as angular from 'angular';
import greeter from './greeter/greeter';

let components = angular.module('app.components', [
    greeter
]).name;

export default components;
