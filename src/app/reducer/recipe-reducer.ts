/**
 * Created by assad on 1/4/17.
 */
import {ActionReducer, Action} from '@ngrx/store';
import * as recipe_collection from '../actions/recipe-actions'
import { Recipe } from '../shared/model/recipe'


export const RecipeReducer: ActionReducer<Recipe[]> = (state: Recipe[] = [], action: Action) => {
    if(action && action.type){
        switch(action.type) {
            case recipe_collection.ActionTypes.LOAD: {
                return Object.assign({}, state);
            }
            case recipe_collection.ActionTypes.LOAD_SUCCESS: {
                return action.payload;
            }
        }
    }
};