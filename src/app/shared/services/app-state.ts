/**
 * Created by assad on 1/5/17.
 */
import { Recipe } from '../../shared/model/recipe';
import {ChefI} from "../model/chef";

export interface AppState {
    recipes: Recipe[];
    chefs:ChefI[]
}