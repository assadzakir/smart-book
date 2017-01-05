import {Ingredients} from "./ingredients";
// export class Recipe {
//     constructor(public imageURL:string,public ingridients:Ingredients[],public name:string,public ){
//
//     }
// }

export interface Recipe {
    imageURL: string;
    name: string;
    ingredients: Ingredients[];
    originalURL:string,
    steps:Array<any>,
    timers:Array<any>
    $key?: string;
}
