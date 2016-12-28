import angular from 'angular';
import './scss/main.scss';
// picks up index.js from components and services folder
import components from './components';
import services from './services';

// bring in 3rd party modules
import animate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';

// need this for old $stateChanged events,
// however, we need to manually grab the module 
// from angular (see below) as it is not 
// exported from this import 
import 'angular-ui-router/release/stateEvents';

import resource from 'angular-resource';

import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

// route, http config and auth setup
import http from './http';
import routes from './routes';
import auth from './auth';

const app = angular.module('myApp', [
    components,
    services,
    animate,
    uiRouter,
    defaultRoute,
    angular.module('ui.router.state.events').name,
    resource,
    dialog
]);

app.filter('titleCase', function() {
    return function titleCaseFilter(input) {
        if(!input) return '';
        return input[0].toUpperCase() + input.slice(1);
    };
});

app.value('apiUrl', 'http://localhost:3000/api');

app.config(http);
app.config(routes);
app.run(auth);
