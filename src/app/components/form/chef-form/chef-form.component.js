"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var ChefFormComponent = (function () {
    // @Input() initialData;
    function ChefFormComponent(dialogRef, fb) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.form = fb.group({
            name: ['', forms_1.Validators.required],
            imageURL: ['', forms_1.Validators.required]
        });
    }
    ChefFormComponent.prototype.ngOnInit = function () {
    };
    ChefFormComponent = __decorate([
        core_1.Component({
            selector: 'sb-chef-form',
            templateUrl: './chef-form.component.html'
        })
    ], ChefFormComponent);
    return ChefFormComponent;
}());
exports.ChefFormComponent = ChefFormComponent;
