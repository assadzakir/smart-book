/**
 * Created by assad on 1/7/17.
 */
import { combineReducers } from '@ngrx/store';
import { RecipeReducer } from './recipe-reducer';
import { ChefReducer } from './chef-reducer';


const reducers = {
    recipes: RecipeReducer,
    chefs: ChefReducer
};

export const Reducer  = combineReducers(reducers);