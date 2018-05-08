import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
/* Comment here */

import { BikesComponent } from './bikes.component';
import { BikeFormComponent } from './bike-form.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';

  // Initialize Firebase

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
