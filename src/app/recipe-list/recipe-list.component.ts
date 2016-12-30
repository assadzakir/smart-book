import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../shared/services/smart-service";
import {Recipe} from "../shared/model/recipe";

@Component({
    selector: 'sb-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {


    allRecipes: Recipe[];
    showLoader: boolean = true;

    constructor(private recipeServices: RecipeService) {
    }

    ngOnInit() {
        this.recipeServices.findAllRecipes()
            .subscribe(recipes => {
                this.allRecipes = recipes;
                this.showLoader = false;
            })
    }


}
