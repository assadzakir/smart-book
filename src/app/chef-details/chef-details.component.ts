import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Recipe} from "../shared/model/recipe";
import {RecipeService} from "../shared/services/smart-service";

@Component({
    selector: 'sb-chef-details',
    templateUrl: './chef-details.component.html'
})
export class ChefDetailsComponent implements OnInit {

    recipes: Recipe[];
    chef$: Observable<any>;
    chefName: string;

    constructor(private recipeService: RecipeService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        if (this.route.snapshot.params['name']) {
            this.chefName = this.route.snapshot.params['name'];
            this.chef$ = this.recipeService.findChefByName(this.chefName);
            this.recipeService.findAllChefRecipes(this.chefName)
                .do(console.log)
                .subscribe(recipes => this.recipes = recipes);
        }
    }


}
