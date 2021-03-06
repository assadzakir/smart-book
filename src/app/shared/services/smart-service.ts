import {Injectable, Inject} from '@angular/core';
import {FirebaseListObservable, AngularFire, FirebaseDatabase, FirebaseRef} from "angularfire2";
import {Observable, Subject} from "rxjs";
import {Recipe} from "../model/recipe";

@Injectable()
export class RecipeService {
    recipes$: FirebaseListObservable<any>;
    chefs$: FirebaseListObservable<any>;
    db: FirebaseDatabase;
    subject = new Subject();
    rootDb: any;

    constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
        this.recipes$ = this.af.database.list('recipes');
        this.chefs$ = this.af.database.list('chefs');
        this.rootDb = fb.database().ref(); // To get the root firebase ref
    }

    getDb() {
        this.db = this.af.database;
        return this.db;
    }

    findAllRecipes() {
        return this.recipes$;
    }

    findAllChefs() {
        return this.chefs$;
    }

    createNewRecipe(recipe: Recipe): Observable<any> {
        let chefId = recipe.chefID

        const recipeToSave = Object.assign({}, recipe, {chefId});

        // Generate a new key under 'recipes' collection, db won't change currently
        const newRecipeKey = this.rootDb.child('recipes').push().key;

        const dataToSave = {};
        dataToSave[`recipes/${newRecipeKey}`] = recipeToSave;
        dataToSave[`recipesPerChef/${chefId}/${newRecipeKey}`] = true;


        this.rootDb.update(dataToSave)
            .then((val) => {
                this.subject.next(val);
                this.subject.complete();
            }, (err) => {
                this.subject.error(err);
                this.subject.complete();
            });
        return this.subject.asObservable();
    }

    findChefByName(chefName): Observable<any> {
        return this.getDb().list('chefs', {
            query: {
                orderByChild: 'name',
                equalTo: chefName
            }
        })
            .map((chef) => chef[0]); // get chef document which name = chefName
    }

    findRecipesKeyPreChefName(chefName) {
        return this.findChefByName(chefName)
            .filter(chef => !!chef)
            .map((chef) => chef.$key)
            .switchMap((chefKey) => this.getDb().list(`recipesPerChef/${chefKey}`, {
                query: {
                    limitToFirst: 3,
                    orderByKey: true
                }
            }));
    }

    findAllChefRecipes(chefName) {
        return this.findRecipesKeyPreChefName(chefName)
            .map((recipeKeys) => recipeKeys
                .map((recipeKey) => {
                    return this.db.object(`recipes/${recipeKey.$key}`)
                }))
            .flatMap((res) => {
                return Observable.combineLatest(res);
            });
    }

    addChef(chef): Observable<any> {
        this.chefs$.push(chef)
            .then((val) => {
                this.subject.next(val);
                this.subject.complete();
            }, (err) => {
                this.subject.error(err);
                this.subject.complete();
            });
        return this.subject.asObservable();
    }

    findRecipeById(recipeId): Observable<Recipe> {
        return  this.af.database.object('/recipes/'+recipeId);
    }


}
