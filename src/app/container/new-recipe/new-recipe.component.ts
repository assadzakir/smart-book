import {Component, OnInit, Input} from '@angular/core';
import {RecipeService} from "../../shared/services/smart-service";
import {MdDialogRef, MdDialog} from "@angular/material"
import {RecipeFormComponent} from "../../components/form/recipe-form/recipe-form.component";
import * as recipe_collection from '../../actions/recipe-actions';
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/services/app-state";


@Component({
    selector: 'sb-new-recipe',
    templateUrl: './new-recipe.component.html'
})
export class NewRecipeComponent implements OnInit {

    @Input() chefID;

    constructor(public dialog: MdDialog, private recipeServices: RecipeService,public store:Store<AppState>) {
    }

    ngOnInit() {
    }


    dialogRef: MdDialogRef<RecipeFormComponent>;

    openDialog() {
        this.dialogRef = this.dialog.open(RecipeFormComponent, {
            disableClose: false
        });

        this.dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.save(result);
            this.dialogRef = null;
        });
    }


    save(form) {
        form.value.chefID = this.chefID;
        this.store.dispatch(new recipe_collection.AddRecipeAction(form.value));

        // this.recipeServices.createNewRecipe(this.chefID, form.value)
        //     .subscribe(() => {
        //         alert("New Recipe has been created successfully");
        //         form.reset();
        //     }, (err) => {
        //         console.error("save() new Recipe", err);
        //     })
    }

}
