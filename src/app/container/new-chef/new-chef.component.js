"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var chef_form_component_1 = require("../form/chef-form/chef-form.component");
var NewChefComponent = (function () {
    function NewChefComponent(dialog, recipeServices) {
        this.dialog = dialog;
        this.recipeServices = recipeServices;
    }
    NewChefComponent.prototype.ngOnInit = function () {
    };
    NewChefComponent.prototype.openDialog = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(chef_form_component_1.ChefFormComponent, {
            disableClose: false
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result)
                _this.saveChef(result);
            _this.dialogRef = null;
        });
    };
    NewChefComponent.prototype.saveChef = function (form) {
        this.recipeServices.addChef(form.value)
            .subscribe(function () {
            alert("New Chef has been created successfully");
            form.reset();
        }, function (err) {
            console.error("save() new Chef", err);
        });
    };
    NewChefComponent = __decorate([
        core_1.Component({
            selector: 'sb-new-chef',
            templateUrl: './new-chef.component.html'
        })
    ], NewChefComponent);
    return NewChefComponent;
}());
exports.NewChefComponent = NewChefComponent;
