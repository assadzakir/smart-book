/**
 * Created by assad on 1/4/17.
 */
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Recipe} from '../shared/model/recipe';


@Injectable()
export class RecipeActions {

    static ADD_RECIPE = 'ADD_RECIPE';
    addRecipe(recipe: Recipe): Action {
        return {
            type: RecipeActions.ADD_RECIPE,
            payload: recipe
        }
    }

    static LOAD_RECIPE_SUCCESS = 'LOAD_RECIPE_SUCCESS';
    loadRecipeSuccess(recipes: Recipe[]): Action {
        return {
            type: RecipeActions.LOAD_RECIPE_SUCCESS,
            payload: recipes
        }
    }

}