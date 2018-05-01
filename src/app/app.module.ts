import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BikesComponent } from './bikes.component';
import { BikeFormComponent } from './bike-form.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyCT6ytBBNf00cQ3gzefgWD5WJR1bGUFZ_w',
    authDomain: 'chapter12d.firebaseapp.com',
    databaseURL: 'https://chapter12d.firebaseio.com',
    projectId: 'chapter12d',
    storageBucket: 'chapter12d.appspot.com',
    messagingSenderId: '814121287397'
  };

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikeFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
