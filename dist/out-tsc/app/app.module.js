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
import { HomeComponent } from './components/home/home.component';
import { RecipeListComponent } from './container/recipe-list/recipe-list.component';
import { RecipeService } from "./shared/services/smart-service";
import { ChefListComponent } from './container/chef-list/chef-list.component';
import { RecipeFormComponent } from './components/form/recipe-form/recipe-form.component';
import { NewRecipeComponent } from './container/new-recipe/new-recipe.component';
import { ChefDetailsComponent } from './container/chef-details/chef-details.component';
import { chefsRouting } from "./routing";
import { ChefFormComponent } from './components/form/chef-form/chef-form.component';
import { NewChefComponent } from './container/new-chef/new-chef.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { RecipeActions } from './actions/recipe-action';
import { ChefActions } from './actions/chef-action';
import { RecipeEffects } from './effects/recipe-effects';
import { ChefEffects } from './effects/chef-effects';
import { Reducer } from './reducer/index';
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
                ChefFormComponent,
                NewChefComponent,
            ],
            imports: [
                chefsRouting,
                AngularFireModule.initializeApp(firebaseConfig),
                MaterialModule.forRoot(),
                FlexLayoutModule.forRoot(),
                EffectsModule.runAfterBootstrap(RecipeEffects),
                EffectsModule.runAfterBootstrap(ChefEffects),
                StoreModule.provideStore({ Reducer: Reducer }),
                StoreDevtoolsModule.instrumentOnlyWithExtension(),
                ReactiveFormsModule,
                BrowserModule,
                FormsModule,
                HttpModule
            ],
            providers: [RecipeService, RecipeActions, ChefActions],
            entryComponents: [
                ChefFormComponent,
                RecipeFormComponent
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/assad/Desktop/Projects/2017/smartbook/src/app/app.module.js.map