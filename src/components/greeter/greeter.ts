import * as angular from 'angular';

class GreeterControler implements ng.IComponentController {
    
    message: string;

}

let greeter: ng.IComponentOptions = {
    template: `
        <div class="box">
            <h3>Hello {{ $ctrl.message }}</h3>
        </div>
    `,
    controller: GreeterControler,
    bindings: {
        message: '@' 
    }
}

export default angular.module('greeter', [])
    .component('greeter', greeter)
    .name;
