"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ChefDetailsComponent = (function () {
    function ChefDetailsComponent(recipeService, route) {
        this.recipeService = recipeService;
        this.route = route;
    }
    ChefDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.params['name']) {
            this.chefName = this.route.snapshot.params['name'];
            this.chef$ = this.recipeService.findChefByName(this.chefName);
            this.recipeService.findAllChefRecipes(this.chefName)
                .do(console.log)
                .subscribe(function (recipes) { return _this.recipes = recipes; });
        }
    };
    ChefDetailsComponent = __decorate([
        core_1.Component({
            selector: 'sb-chef-details',
            templateUrl: './chef-details.component.html'
        })
    ], ChefDetailsComponent);
    return ChefDetailsComponent;
}());
exports.ChefDetailsComponent = ChefDetailsComponent;
