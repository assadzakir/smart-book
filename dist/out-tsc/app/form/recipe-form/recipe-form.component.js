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
import { FormBuilder, Validators } from "@angular/forms";
import { MdDialogRef } from "@angular/material";
export var RecipeFormComponent = (function () {
    // @Input() initialData;
    function RecipeFormComponent(dialogRef, fb) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.form = fb.group({
            name: ['', Validators.required],
            imageURL: ['', Validators.required],
        });
    }
    // ngOnChanges(changes: SimpleChanges): void {
    //   if(changes['initialData']){
    //     console.log("changes['initialData']", JSON.stringify(changes['initialData'], null, 2))
    //     if(this.form && changes.initialData.currentValue){
    //       this.form.patchValue(changes.initialData.currentValue)
    //     }
    //   }
    // }
    RecipeFormComponent.prototype.ngOnInit = function () {
    };
    RecipeFormComponent.prototype.reset = function () {
        this.form.reset();
    };
    Object.defineProperty(RecipeFormComponent.prototype, "value", {
        get: function () {
            return this.form.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecipeFormComponent.prototype, "formValue", {
        get: function () {
            return this.form.value;
        },
        enumerable: true,
        configurable: true
    });
    RecipeFormComponent = __decorate([
        Component({
            selector: 'sb-recipe-form',
            templateUrl: './recipe-form.component.html'
        }), 
        __metadata('design:paramtypes', [MdDialogRef, FormBuilder])
    ], RecipeFormComponent);
    return RecipeFormComponent;
}());
//# sourceMappingURL=/home/assad/Desktop/Projects/2017/smartbook/src/app/form/recipe-form/recipe-form.component.js.map