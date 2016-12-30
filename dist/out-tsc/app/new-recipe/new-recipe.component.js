var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { RecipeService } from "../shared/services/smart-service";
import { MdDialog } from "@angular/material";
import { RecipeFormComponent } from "../form/recipe-form/recipe-form.component";
export var NewRecipeComponent = (function () {
    function NewRecipeComponent(dialog, recipeServices) {
        this.dialog = dialog;
        this.recipeServices = recipeServices;
    }
    NewRecipeComponent.prototype.ngOnInit = function () {
    };
    NewRecipeComponent.prototype.openDialog = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(RecipeFormComponent, {
            disableClose: false
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result)
                _this.save(result);
            _this.dialogRef = null;
        });
    };
    NewRecipeComponent.prototype.save = function (form) {
        debugger;
        this.recipeServices.createNewRecipe(this.chefID, form.value)
            .subscribe(function () {
            alert("New Recipe has been created successfully");
            form.reset();
        }, function (err) {
            console.error("save() new Recipe", err);
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], NewRecipeComponent.prototype, "chefID", void 0);
    NewRecipeComponent = __decorate([
        Component({
            selector: 'sb-new-recipe',
            templateUrl: './new-recipe.component.html'
        }), 
        __metadata('design:paramtypes', [MdDialog, RecipeService])
    ], NewRecipeComponent);
    return NewRecipeComponent;
}());
//# sourceMappingURL=/home/assad/Desktop/Projects/2017/smartbook/src/app/new-recipe/new-recipe.component.js.map