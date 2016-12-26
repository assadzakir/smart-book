var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RecipeService } from "../shared/services/smart-service";
export var NewRecipeComponent = (function () {
    function NewRecipeComponent(recipeServices) {
        this.recipeServices = recipeServices;
    }
    NewRecipeComponent.prototype.ngOnInit = function () {
    };
    NewRecipeComponent.prototype.save = function (form) {
        this.recipeServices.createNewRecipe('2', form.value)
            .subscribe(function () {
            alert("New Lesson has been created successfully");
            form.reset();
        }, function (err) {
            console.error("save() new lesson", err);
        });
    };
    NewRecipeComponent = __decorate([
        Component({
            selector: 'sb-new-recipe',
            templateUrl: 'new-recipe.component.html'
        }), 
        __metadata('design:paramtypes', [RecipeService])
    ], NewRecipeComponent);
    return NewRecipeComponent;
}());
//# sourceMappingURL=/home/assad/Desktop/Projects/smartbook/src/app/new-recipe/new-recipe.component.js.map