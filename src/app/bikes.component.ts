import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Router } from '@angular/router';
import { Bike } from './bike';

@Component({
    selector: 'bikes',
    templateUrl: './bikes.component.html'
  })
export class BikesComponent {
  bikes;

  constructor(private db: AngularFireDatabase, private _router: Router) {

  }

  ngOnInit() {
    this.bikes = this.db.list('/');
    console.log("Here we loade");
  }

  add() {
    this._router.navigate(['add']);
    console.log("here we add");
  }

  delete(bike) {
    if (confirm('Are you sure you want to delete ' + bike.framecolor + '?')) {
        this.db.object(bike.$key).remove()
        .then(x => console.log("SUCCESS"))
        .catch(error => {
          alert("Could not delete the bike.");
          console.log("Error", error)
        });
    }
  }

public accessoriesSave: boolean;

public onAccessoriesSave(value: boolean){
  this.accessoriesSave = value;
}
}

