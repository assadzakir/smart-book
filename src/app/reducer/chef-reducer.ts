/**
 * Created by assad on 1/7/17.
 */
import {ActionReducer, Action} from '@ngrx/store';
import { ChefActions } from '../actions/chef-action'
import {ChefI} from "../shared/model/chef";


export const ChefReducer: ActionReducer<ChefI[]> = (state: ChefI[] = [], action: Action) => {
    if(action && action.type){
        switch(action.type) {
            case ChefActions.LOAD_CHEF_SUCCESS:
                return action.payload;
            case ChefActions.ADD_CHEF:
                return [...state, Object.assign({}, action.payload)];
            default:
                return state;
        }
    }
};