import {Ingredients} from "./ingredients";
export class Recipe {
    constructor(public imageURL:string,public ingridients:Ingredients[],public name:string,public originalURL:string ,public steps:Array<any>,public timers:Array<any>){

    }
}
