/**
 * Created by assad on 1/11/17.
 */
import { Action } from '@ngrx/store';
import { Recipe } from '../shared/model/recipe';
import { type } from '../util';

export const ActionTypes = {
    ADD_RECIPE:             type('[Recipe] Add Recipe'),
    ADD_RECIPE_SUCCESS:     type('[Recipe] Add Recipe Success'),
    ADD_RECIPE_FAIL:        type('[Recipe] Add Recipe Fail'),
    REMOVE_RECIPE:          type('[Recipe] Remove Recipe'),
    REMOVE_RECIPE_SUCCESS:  type('[Recipe] Remove Recipe Success'),
    REMOVE_RECIPE_FAIL:     type('[Recipe] Remove Recipe Fail'),
    LOAD:                   type('[Recipe] Load'),
    LOAD_SUCCESS:           type('[Recipe] Load Success'),
    LOAD_FAIL:              type('[Recipe] Load Fail'),
};

/**
 * Add Recipe to Collection Actions
 */
export class AddRecipeAction implements Action {
    type = ActionTypes.ADD_RECIPE;

    constructor(public payload: Recipe) { }
}

export class AddRecipeSuccessAction implements Action {
    type = ActionTypes.ADD_RECIPE_SUCCESS;

    constructor(public payload: Recipe) { }
}

export class AddRecipeFailAction implements Action {
    type = ActionTypes.ADD_RECIPE_FAIL;

    constructor(public payload: Recipe) { }
}


/**
 * Remove Recipe from Collection Actions
 */
export class RemoveRecipeAction implements Action {
    type = ActionTypes.REMOVE_RECIPE;

    constructor(public payload: Recipe) { }
}

export class RemoveRecipeSuccessAction implements Action {
    type = ActionTypes.REMOVE_RECIPE_SUCCESS;

    constructor(public payload: Recipe) { }
}

export class RemoveRecipeFailAction implements Action {
    type = ActionTypes.REMOVE_RECIPE_FAIL;

    constructor(public payload: Recipe) { }
}

/**
 * Load Recipe Actions
 */
export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor() { }
}

export class LoadSuccessAction implements Action {
    type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: Recipe[]) { }
}

export class LoadFailAction implements Action {
    type = ActionTypes.LOAD_FAIL;

    constructor(public payload: any) { }
}


export type Actions
    = AddRecipeAction
    | AddRecipeSuccessAction
    | AddRecipeFailAction
    | RemoveRecipeAction
    | RemoveRecipeSuccessAction
    | RemoveRecipeFailAction
    | LoadAction
    | LoadSuccessAction
    | LoadFailAction