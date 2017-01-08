/**
 * Created by assad on 1/7/17.
 */
import {Injectable} from '@angular/core';
import {Effect, toPayload, Actions } from '@ngrx/effects';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap'

import {RecipeService} from '../shared/services/smart-service';
import {Recipe} from '../shared/model/recipe';
import {ChefActions} from '../actions/chef-action';
import {Action} from "@ngrx/store";

@Injectable()
export class ChefEffects {

    constructor(
        private actions$: Actions,
        private fb: RecipeService,
        private chefActions: ChefActions
    ) {  }

    @Effect() allChefs$ = this.fb.findAllChefs()
        .map(chef => { return this.chefActions.loadChefSuccess(chef)});

    @Effect()
    addChef$: Observable<Action> = this.actions$
        .ofType(ChefActions.ADD_CHEF)
        .mergeMap((action) => {
        debugger;
        let data = this.fb.addChef(action.payload)
    return data
    }
        )

}