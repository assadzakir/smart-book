import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MdDialogRef} from "@angular/material"
import {valideUrl} from "../../shared/validate-url";

@Component({
    selector: 'sb-chef-form',
    templateUrl: './chef-form.component.html'
})
export class ChefFormComponent implements OnInit {

    form: FormGroup;
    // @Input() initialData;
    constructor(public dialogRef: MdDialogRef<ChefFormComponent>, private fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            imageURL: ['', Validators.required]
        })
    }

    ngOnInit() {
    }

}
