import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';
import {MaterialModule} from "@angular/material"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import {RecipeService} from "./shared/services/smart-service";
import { ChefListComponent } from './chef-list/chef-list.component';
import {RecipeFormComponent} from './form/recipe-form/recipe-form.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { ChefDetailsComponent } from './chef-details/chef-details.component';
import {chefsRouting} from "./routing";
import { ChefFormComponent } from './form/chef-form/chef-form.component';
import { NewChefComponent } from './new-chef/new-chef.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeListComponent,
    ChefListComponent,
    RecipeFormComponent,
    NewRecipeComponent,
    ChefDetailsComponent,
    ChefFormComponent,
    NewChefComponent,
  ],
  imports: [
    chefsRouting,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipeService],
  entryComponents: [
    ChefFormComponent,
    RecipeFormComponent
],
  bootstrap: [AppComponent  ]
})
export class AppModule { }
