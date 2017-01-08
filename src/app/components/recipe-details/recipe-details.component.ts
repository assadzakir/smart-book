import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {RecipeService} from "../../shared/services/smart-service";
import {Observable} from "rxjs";
import {Recipe} from "../../shared/model/recipe";

@Component({
  selector: 'sb-recipe-details',
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {
  recipeId:string;
  recipe$:Observable<Recipe>;
  constructor(public route:ActivatedRoute,public recipeService:RecipeService) { }
        ngOnInit() {
          if (this.route.snapshot.params['id']) {
            this.recipeId = this.route.snapshot.params['id'];
            this.recipe$ = this.recipeService.findRecipeById(this.recipeId);
            console.log(this.recipe$)
          }
        }

}
