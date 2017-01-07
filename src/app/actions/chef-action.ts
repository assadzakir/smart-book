/**
 * Created by assad on 1/7/17.
 */
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {ChefI} from '../shared/model/chef';


@Injectable()
export class ChefActions {

    static ADD_CHEF = 'ADD_CHEF';
    addChef(chef: ChefI): Action {
        return {
            type: ChefActions.ADD_CHEF,
            payload: chef
        }
    }

    static LOAD_CHEF_SUCCESS = 'LOAD_CHEF_SUCCESS';
    loadChefSuccess(chefs: ChefI[]): Action {
        return {
            type: ChefActions.LOAD_CHEF_SUCCESS,
            payload: chefs
        }
    }

}