/**
 * Created by assad on 12/25/16.
 */
import {Routes, RouterModule} from '@angular/router';
import  {ChefListComponent} from './chef-list/chef-list.component'
import  {ChefDetailsComponent} from './chef-details/chef-details.component'

const indexRoute = {path: '', redirectTo: 'chef', pathMatch: 'full'};
export const chefsRoutes: Routes = [
    {path: 'chef', component: ChefListComponent},
    {path: 'chef/:name', children: [
        {path: '', component: ChefDetailsComponent},
    ]},
    indexRoute
];

export const chefsRouting = RouterModule.forRoot(chefsRoutes);