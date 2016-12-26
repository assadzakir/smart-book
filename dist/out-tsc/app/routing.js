import { RouterModule } from '@angular/router';
import { ChefListComponent } from './chef-list/chef-list.component';
import { ChefDetailsComponent } from './chef-details/chef-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
var indexRoute = { path: '', redirectTo: 'chef', pathMatch: 'full' };
export var chefsRoutes = [
    { path: 'chef', component: ChefListComponent },
    { path: 'chef/:name', children: [
            { path: '', component: ChefDetailsComponent },
        ] },
    { path: 'recipes', component: RecipeListComponent },
    indexRoute
];
export var chefsRouting = RouterModule.forRoot(chefsRoutes);
//# sourceMappingURL=/home/assad/Desktop/Projects/2017/smartbook/src/app/routing.js.map