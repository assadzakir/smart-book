/**
 * Created by assad on 1/7/17.
 */
import {ActionReducer, Action} from '@ngrx/store';
import * as chef_collection from '../actions/chef-actions'
import {ChefI} from "../shared/model/chef";


export const ChefReducer: ActionReducer<ChefI[]> = (state: ChefI[] = [], action: Action) => {
    if(action && action.type){
        switch(action.type) {
            case chef_collection.ActionTypes.LOAD: {
                return Object.assign({}, state);
            }
            case chef_collection.ActionTypes.LOAD_SUCCESS: {
                return action.payload;
            }
        }
    }
};