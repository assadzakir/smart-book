/**
 * Created by assad on 1/4/17.
 */
import {Injectable} from '@angular/core';
import {Effect, toPayload, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap'
import {Action} from "@ngrx/store";
import {RecipeService} from '../shared/services/smart-service';
import {Recipe} from '../shared/model/recipe';
import * as recipe_collection from '../actions/recipe-actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RecipeEffects {

    constructor(private actions$: Actions,private fb: RecipeService){}

    @Effect()
    loadRecipe$: Observable<Action> = this.actions$
        .ofType(recipe_collection.ActionTypes.LOAD)
        .startWith(new recipe_collection.LoadAction())
        .switchMap(() =>
            this.fb.findAllRecipes()
                .map((recipes: Recipe[]) => new recipe_collection.LoadSuccessAction(recipes))
                .catch(error => of(new recipe_collection.LoadFailAction(error)))
        );

}