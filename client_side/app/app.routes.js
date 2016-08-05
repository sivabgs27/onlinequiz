"use strict";
var router_1 = require('@angular/router');
var user_reg_component_1 = require('./user_registration/user_reg.component');
var login_component_1 = require('./login/login.component');
var app_component_1 = require('./app.component');
var routes = [
    {
        path: '',
        component: app_component_1.AppComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'user_reg',
        component: user_reg_component_1.UserRegistrationComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map