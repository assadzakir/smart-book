var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2";
export var RecipeServiceService = (function () {
    function RecipeServiceService(db) {
        this.db = db;
    }
    RecipeServiceService.prototype.findAllLessons = function () {
        return this.db.list('lessons')
            .do(console.log)
            .map(Lesson.fromJsonList);
    };
    RecipeServiceService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AngularFireDatabase])
    ], RecipeServiceService);
    return RecipeServiceService;
}());
//# sourceMappingURL=/home/assad/Desktop/Projects/smartbook/src/app/shared/services/recipe-service.service.js.map