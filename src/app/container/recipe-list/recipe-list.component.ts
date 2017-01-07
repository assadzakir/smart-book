import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../../shared/services/smart-service";
import {Recipe} from "../../shared/model/recipe";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from "../../shared/services/app-state";


@Component({
    selector: 'sb-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {


    allRecipes: Observable<Recipe[]>;
    showLoader: boolean = true;

    constructor(private recipeServices: RecipeService, private store: Store<AppState>) {
    }

    ngOnInit() {
        this.allRecipes = this.store.select(state => state['Reducer'].recipes);
        console.log(this.allRecipes);
        if(this.allRecipes)
            this.showLoader = false;
        // this.recipeServices.findAllRecipes()
        //     .subscribe(recipes => {
        //         this.allRecipes = recipes;
        //         this.showLoader = false;
        //     })
    }


}
