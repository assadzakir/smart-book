import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {RecipeService} from "../shared/services/smart-service";
import {Chef} from "../shared/model/chef";

@Component({
  selector: 'sb-chef-list',
  templateUrl: './chef-list.component.html'
})
export class ChefListComponent implements OnInit {

  allChefs:Chef[];

  constructor(private recipeServices:RecipeService) { }

  ngOnInit() {
    this.recipeServices.findAllChefs()
        .do(console.log)
        .subscribe(chefs => this.allChefs = chefs)
  }

}
