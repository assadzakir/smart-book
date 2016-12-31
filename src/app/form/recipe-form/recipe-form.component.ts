import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from "@angular/forms";
import {MdDialogRef} from "@angular/material"
import {valideUrl} from "../../shared/validate-url";
import {Ingredients} from "../../shared/model/ingredients";

@Component({
    selector: 'sb-recipe-form',
    templateUrl: './recipe-form.component.html'
})
export class RecipeFormComponent implements OnInit {

    form: FormGroup;

    // @Input() initialData;
    constructor(public dialogRef: MdDialogRef<RecipeFormComponent>, private fb: FormBuilder) {
        let ingredients: FormArray = new FormArray([]);
        let steps: FormArray = new FormArray([]);
        this.form = fb.group({
            name: ['', Validators.required],
            imageURL: ['', Validators.required],
            ingredients: ingredients,
            steps: steps,
            videoUrl: ['', [Validators.required, valideUrl]]
        })
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //   if(changes['initialData']){
    //     console.log("changes['initialData']", JSON.stringify(changes['initialData'], null, 2))
    //     if(this.form && changes.initialData.currentValue){
    //       this.form.patchValue(changes.initialData.currentValue)
    //     }
    //   }
    // }

    onAddIngredients(name: string, quantity: string, type: string) {
        (<FormArray>this.form.controls['ingredients']).push(
            new FormGroup({
                name: new FormControl(name, Validators.required),
                quantity: new FormControl(quantity, Validators.required,),
                type: new FormControl(type, Validators.required)
            })
        );
    }

    onAddSteps(step: string) {
        (<FormArray>this.form.controls['steps']).push(
            new FormGroup({
                stepNo: new FormControl(step, Validators.required)
            })
        );
    }

    removeIngredient(index: number) {
        (<FormArray>this.form.controls['ingredients']).removeAt(index);
    }

    removeStep(index: number) {
        (<FormArray>this.form.controls['steps']).removeAt(index);
    }


    ngOnInit() {

    }

    reset() {
        this.form.reset();
    }

    get value() {
        return this.form.value;
    }

    get formValue() {
        return this.form.value;
    }


}