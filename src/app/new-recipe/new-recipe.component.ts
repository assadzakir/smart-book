import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../shared/services/smart-service";

@Component({
  selector: 'sb-new-recipe',
  templateUrl: './new-recipe.component.html'
})
export class NewRecipeComponent implements OnInit {

  constructor(private recipeServices:RecipeService) { }

  ngOnInit() {
  }


  save(form ){
    this.recipeServices.createNewRecipe('2', form.value)
        .subscribe(() => {
          alert("New Lesson has been created successfully");
           form.reset();
        }, (err) => {
          console.error("save() new lesson", err);
        })
  }

}
