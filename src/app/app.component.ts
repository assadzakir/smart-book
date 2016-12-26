import { Component } from '@angular/core';
// import {AngularFire,FirebaseListObservable} from 'angularfire2/index';


@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'smart book works!';
 // constructor(private af:AngularFire){
    // const chefs:FirebaseListObservable<any> = af.database.list('recipes');
    // chefs.subscribe(val => console.log(val))
  //}
}
