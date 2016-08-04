"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var forms_2 = require('@angular/forms');
var user_reg_service_1 = require('./user_reg.service');
/**
 * UserDetails
 */
var UserRegistrationComponent = (function () {
    function UserRegistrationComponent(rr) {
        this.rr = rr;
        this.dt = new Date();
        this.message = {};
        this.area = ['Doha', 'Test'];
        this.Area = '0';
        this.C_Area = '0';
        this.user = {};
    }
    UserRegistrationComponent.prototype.onSubmitTemplateBased = function () {
        var _this = this;
        this.rr.registerUser(this.user).subscribe(function (data) { return _this.message = {}; }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) { return console.log("Error HTTP Post Service"); }, // in case of failure show this message
        function () { return console.log("Job Done Post !"); } //run this code in all cases
         //run this code in all cases
        );
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'register-user',
            providers: [user_reg_service_1.UserRegistrationService],
            directives: [common_1.CORE_DIRECTIVES, forms_1.FORM_DIRECTIVES, forms_2.NgModel, common_1.NgIf],
            templateUrl: './client_side/app/user_registration/user.html',
            styleUrls: ['client_side/app/user_registration/user_reg.component.css']
        }), 
        __metadata('design:paramtypes', [user_reg_service_1.UserRegistrationService])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;
//# sourceMappingURL=user_reg.component.js.map