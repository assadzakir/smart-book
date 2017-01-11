/**
 * Created by assad on 1/10/17.
 */
import { Action } from '@ngrx/store';
import { ChefI } from '../shared/model/chef';
import { type } from '../util';

export const ActionTypes = {
    ADD_CHEF:             type('[Chef] Add Chef'),
    ADD_CHEF_SUCCESS:     type('[Chef] Add Chef Success'),
    ADD_CHEF_FAIL:        type('[Chef] Add Chef Fail'),
    REMOVE_CHEF:          type('[Chef] Remove Chef'),
    REMOVE_CHEF_SUCCESS:  type('[Chef] Remove Chef Success'),
    REMOVE_CHEF_FAIL:     type('[Chef] Remove Chef Fail'),
    LOAD:                 type('[Chef] Load'),
    LOAD_SUCCESS:         type('[Chef] Load Success'),
    LOAD_FAIL:            type('[Chef] Load Fail'),
};

/**
 * Add Chef to Collection Actions
 */
export class AddChefAction implements Action {
    type = ActionTypes.ADD_CHEF;

    constructor(public payload: ChefI) { }
}

export class AddChefSuccessAction implements Action {
    type = ActionTypes.ADD_CHEF_SUCCESS;

    constructor(public payload: ChefI) { }
}

export class AddChefFailAction implements Action {
    type = ActionTypes.ADD_CHEF_FAIL;

    constructor(public payload: ChefI) { }
}


/**
 * Remove Chef from Collection Actions
 */
export class RemoveChefAction implements Action {
    type = ActionTypes.REMOVE_CHEF;

    constructor(public payload: ChefI) { }
}

export class RemoveChefSuccessAction implements Action {
    type = ActionTypes.REMOVE_CHEF_SUCCESS;

    constructor(public payload: ChefI) { }
}

export class RemoveChefFailAction implements Action {
    type = ActionTypes.REMOVE_CHEF_FAIL;

    constructor(public payload: ChefI) { }
}

/**
 * Load Chef Actions
 */
export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor() { }
}

export class LoadSuccessAction implements Action {
    type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: ChefI[]) { }
}

export class LoadFailAction implements Action {
    type = ActionTypes.LOAD_FAIL;

    constructor(public payload: any) { }
}


export type Actions
    = AddChefAction
    | AddChefSuccessAction
    | AddChefFailAction
    | RemoveChefAction
    | RemoveChefSuccessAction
    | RemoveChefFailAction
    | LoadAction
    | LoadSuccessAction
    | LoadFailAction