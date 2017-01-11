/**
 * Created by assad on 1/7/17.
 */
import {Injectable} from '@angular/core';
import {Effect, toPayload, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap'
import {RecipeService} from '../shared/services/smart-service';
import * as chef_collection from '../actions/chef-actions';
import {Action} from "@ngrx/store";
import {ChefI} from "../shared/model/chef";
import { of } from 'rxjs/observable/of';

@Injectable()
export class ChefEffects {

    constructor(private actions$: Actions, private fb: RecipeService){};

    @Effect()
    loadChef$: Observable<Action> = this.actions$
        .ofType(chef_collection.ActionTypes.LOAD)
        .startWith(new chef_collection.LoadAction())
        .switchMap(() =>
            this.fb.findAllChefs()
                .map((chefs: ChefI[]) => new chef_collection.LoadSuccessAction(chefs))
                .catch(error => of(new chef_collection.LoadFailAction(error)))
        );


}