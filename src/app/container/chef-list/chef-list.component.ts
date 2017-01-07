import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {RecipeService} from "../../shared/services/smart-service";
import {ChefI} from "../../shared/model/chef";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from "../../shared/services/app-state";
import {ChefActions} from "../../actions/chef-action";

@Component({
    selector: 'sb-chef-list',
    templateUrl: './chef-list.component.html'
})
export class ChefListComponent implements OnInit {

    allChefs: Observable<ChefI[]>;
    showLoader: boolean = true;

    constructor(private recipeServices: RecipeService, private store: Store<AppState>) {
    }

    ngOnInit() {
            this.allChefs = this.store.select(state => state['Reducer'].chefs);
        console.log(this.allChefs);
        if(this.allChefs)
            this.showLoader = false;
    }

}
