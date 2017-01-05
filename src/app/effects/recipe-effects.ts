/**
 * Created by assad on 1/4/17.
 */
import {Injectable} from '@angular/core';
import {Effect, toPayload, Actions } from '@ngrx/effects';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap'

import {RecipeService} from '../shared/services/smart-service';
import {Recipe} from '../shared/model/recipe';
import {RecipeActions} from '../actions/recipe-action';

@Injectable()
export class RecipeEffects {

    constructor(
        private actions$: Actions,
        private fb: RecipeService,
        private recipeActions: RecipeActions
    ) {  }

    @Effect() allRecipes$ = this.fb.findAllRecipes()
        .map(recipe => { return this.recipeActions.loadRecipeSuccess(recipe)});

}