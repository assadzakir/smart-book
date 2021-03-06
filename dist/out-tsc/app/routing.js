import { RouterModule } from '@angular/router';
import { ChefListComponent } from './container/chef-list/chef-list.component';
import { ChefDetailsComponent } from './container/chef-details/chef-details.component';
import { RecipeListComponent } from './container/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
var indexRoute = { path: '', redirectTo: 'chef', pathMatch: 'full' };
export var chefsRoutes = [
    { path: 'chef', component: ChefListComponent },
    { path: 'chef/:name', children: [
            { path: '', component: ChefDetailsComponent },
            { path: ':id', component: RecipeDetailsComponent },
        ] },
    { path: 'recipe', component: RecipeListComponent },
    { path: 'recipe/:id', component: RecipeDetailsComponent },
    indexRoute
];
export var chefsRouting = RouterModule.forRoot(chefsRoutes);
//# sourceMappingURL=/home/assad/Desktop/Projects/2017/smartbook/src/app/routing.js.map