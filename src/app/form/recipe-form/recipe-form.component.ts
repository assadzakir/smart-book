import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MdDialogRef} from "@angular/material"
import {valideUrl} from "../../shared/validate-url";

@Component({
    selector: 'sb-recipe-form',
    templateUrl: './recipe-form.component.html'
})
export class RecipeFormComponent implements OnInit {

    form: FormGroup;
    // @Input() initialData;
    constructor(public dialogRef: MdDialogRef<RecipeFormComponent>, private fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            imageURL: ['', Validators.required],
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