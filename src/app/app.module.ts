import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AppComponent } from './app.component';
import {BikesComponent} from './bikes.component';
import {routing} from './app.routing';

import { ReactiveFormsModule } from '@angular/forms';
import { BikeFormComponent } from './bike-form.component';
import { AccessoriesComponent } from './accessories.component';
import { FrameComponent } from './frame.component';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCT6ytBBNf00cQ3gzefgWD5WJR1bGUFZ_w",
  authDomain: "chapter12d.firebaseapp.com",
  databaseURL: "https://chapter12d.firebaseio.com",
  projectId: "chapter12d",
  storageBucket: "chapter12d.appspot.com",
  messagingSenderId: "814121287397"
};

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikeFormComponent,
    AccessoriesComponent,
    FrameComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
