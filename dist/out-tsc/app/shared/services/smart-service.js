var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
import { AngularFire, FirebaseRef } from "angularfire2";
import { Observable, Subject } from "rxjs";
export var RecipeService = (function () {
    function RecipeService(af, fb) {
        this.af = af;
        this.recipes$ = this.af.database.list('recipes');
        this.chefs$ = this.af.database.list('chefs');
        this.rootDb = fb.database().ref(); // To get the root firebase ref
    }
    RecipeService.prototype.getDb = function () {
        this.db = this.af.database;
        return this.db;
    };
    RecipeService.prototype.findAllRecipes = function () {
        return this.recipes$;
    };
    RecipeService.prototype.findAllChefs = function () {
        return this.chefs$;
    };
    RecipeService.prototype.createNewRecipe = function (chefId, recipe) {
        var recipeToSave = Object.assign({}, recipe, { chefId: chefId });
        // Generate a new key under 'recipes' collection, db won't change currently
        var newRecipeKey = this.rootDb.child('recipes').push().key;
        var dataToSave = {};
        dataToSave[("recipes/" + newRecipeKey)] = recipeToSave;
        dataToSave[("recipesPerChef/" + chefId + "/" + newRecipeKey)] = true;
        var subject = new Subject();
        this.rootDb.update(dataToSave)
            .then(function (val) {
            subject.next(val);
            subject.complete();
        }, function (err) {
            subject.error(err);
            subject.complete();
        });
        return subject.asObservable();
    };
    RecipeService.prototype.findChefByName = function (chefName) {
        return this.getDb().list('chefs', {
            query: {
                orderByChild: 'name',
                equalTo: chefName
            }
        })
            .map(function (chef) { return chef[0]; }); // get chef document which name = chefName
    };
    RecipeService.prototype.findRecipesKeyPreChefName = function (chefName) {
        var _this = this;
        return this.findChefByName(chefName)
            .filter(function (chef) { return !!chef; })
            .map(function (chef) { return chef.$key; })
            .switchMap(function (chefKey) { return _this.getDb().list("recipesPerChef/" + chefKey, {
            query: {
                limitToFirst: 3,
                orderByKey: true
            }
        }); });
    };
    RecipeService.prototype.findAllChefRecipes = function (chefName) {
        var _this = this;
        return this.findRecipesKeyPreChefName(chefName)
            .map(function (recipeKeys) { return recipeKeys
            .map(function (recipeKey) {
            return _this.db.object("recipes/" + recipeKey.$key);
        }); })
            .flatMap(function (res) {
            return Observable.combineLatest(res);
        });
    };
    RecipeService = __decorate([
        Injectable(),
        __param(1, Inject(FirebaseRef)), 
        __metadata('design:paramtypes', [AngularFire, Object])
    ], RecipeService);
    return RecipeService;
}());
//# sourceMappingURL=/home/assad/Desktop/Projects/2017/smartbook/src/app/shared/services/smart-service.js.map