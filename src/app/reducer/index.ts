/**
 * Created by assad on 1/7/17.
 */
import {combineReducers, ActionReducer} from '@ngrx/store';
import {RecipeReducer} from './recipe-reducer';
import {ChefReducer} from './chef-reducer';
import {AppState} from "../shared/services/app-state";


const reducers = {
    recipes: RecipeReducer,
    chefs: ChefReducer
};

const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}