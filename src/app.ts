import * as angular from 'angular';
import components from './components/components';
import views from './views/views';

let app = angular.module('app', [
    require('angular-ui-router'),
    views, components
]).config(router)
.name;

function router(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider
) {
    $urlRouterProvider.otherwise('/app/home');  
    $stateProvider.state('app', {
        abstract: true,
        url: '/app',
        template: '<div class="app"><ui-view></ui-view></div>'
    });
}

angular.element(document).ready(() => {
    angular.bootstrap(document.querySelector('body'), [app]);
});


export default app;
