"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var validate_url_1 = require("../../shared/validate-url");
var RecipeFormComponent = (function () {
    // @Input() initialData;
    function RecipeFormComponent(dialogRef, fb) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        var ingredients = new forms_1.FormArray([]);
        var steps = new forms_1.FormArray([]);
        this.form = fb.group({
            name: ['', forms_1.Validators.required],
            imageURL: ['', forms_1.Validators.required],
            ingredients: ingredients,
            steps: steps,
            videoUrl: ['', [forms_1.Validators.required, validate_url_1.valideUrl]]
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
    RecipeFormComponent.prototype.onAddIngredients = function (name, quantity, type) {
        this.form.controls['ingredients'].push(new forms_1.FormGroup({
            name: new forms_1.FormControl(name, forms_1.Validators.required),
            quantity: new forms_1.FormControl(quantity, forms_1.Validators.required),
            type: new forms_1.FormControl(type, forms_1.Validators.required)
        }));
    };
    RecipeFormComponent.prototype.onAddSteps = function (step) {
        this.form.controls['steps'].push(new forms_1.FormGroup({
            stepNo: new forms_1.FormControl(step, forms_1.Validators.required)
        }));
    };
    RecipeFormComponent.prototype.removeIngredient = function (index) {
        this.form.controls['ingredients'].removeAt(index);
    };
    RecipeFormComponent.prototype.removeStep = function (index) {
        this.form.controls['steps'].removeAt(index);
    };
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
        core_1.Component({
            selector: 'sb-recipe-form',
            templateUrl: './recipe-form.component.html'
        })
    ], RecipeFormComponent);
    return RecipeFormComponent;
}());
exports.RecipeFormComponent = RecipeFormComponent;
