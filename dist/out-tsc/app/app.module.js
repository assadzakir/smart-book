var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from "@angular/material";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from "./shared/services/smart-service";
import { ChefListComponent } from './chef-list/chef-list.component';
import { RecipeFormComponent } from './form/recipe-form/recipe-form.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { ChefDetailsComponent } from './chef-details/chef-details.component';
import { chefsRouting } from "./routing";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                RecipeListComponent,
                ChefListComponent,
                RecipeFormComponent,
                NewRecipeComponent,
                ChefDetailsComponent,
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
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/assad/Desktop/Projects/smartbook/src/app/app.module.js.map