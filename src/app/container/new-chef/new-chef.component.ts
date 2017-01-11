import {Component, OnInit} from '@angular/core';
import {ChefFormComponent} from "../../components/form/chef-form/chef-form.component";
import {RecipeService} from "../../shared/services/smart-service";
import {MdDialog, MdDialogRef} from "@angular/material";
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/services/app-state";

@Component({
    selector: 'sb-new-chef',
    templateUrl: './new-chef.component.html'
})
export class NewChefComponent implements OnInit {

    constructor(public store:Store<AppState>,public dialog: MdDialog, private recipeServices: RecipeService) {
    }

    ngOnInit() {
    }

    dialogRef: MdDialogRef<ChefFormComponent>;

    openDialog() {
        this.dialogRef = this.dialog.open(ChefFormComponent, {
            disableClose: false
        });

        this.dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.saveChef(result);
            this.dialogRef = null;
        });
    }

    saveChef(form) {
        // this.store.dispatch(
        //     this.chefActions.addChef(form.value)
        // );
        this.recipeServices.addChef(form.value)
            .subscribe(() => {
                alert("New Chef has been created successfully");
                form.reset();
            }, (err) => {
                console.error("save() new Chef", err);
            })
    }

}
