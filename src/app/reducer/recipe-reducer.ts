/**
 * Created by assad on 1/4/17.
 */
import {ActionReducer, Action} from '@ngrx/store';
import { RecipeActions } from '../actions/recipe-action'
import { Recipe } from '../shared/model/recipe'


export const RecipeReducer: ActionReducer<Recipe[]> = (state: Recipe[] = [], action: Action) => {
    if(action && action.type){
        switch(action.type) {
            case RecipeActions.LOAD_RECIPE_SUCCESS:
                return action.payload;
            case RecipeActions.ADD_RECIPE:
                return [...state, Object.assign({}, action.payload)];
            default:
                return state;
        }
    }
};