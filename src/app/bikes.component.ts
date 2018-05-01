import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Bike } from './bike';

interface User {
    frameColor: string;
    wheels: string;
    headsetFront: string;
    headsetRear: string;
}
@Component({
    selector: 'bikes',
    templateUrl: './bikes.component.html'
  })
export class BikesComponent {
  title: string;
  content: string;

  bikesCol: AngularFirestoreCollection<Bike>;
  bikes: any;

  constructor(private afs: AngularFirestore, private _router: Router) {

  }

  ngOnInit() {
    this.bikesCol = this.afs.collection('bikes');
    this.bikes = this.bikesCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Bike;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  add() {
    this._router.navigate(['add']);
  }

  delete(bikeId, name) {
    if (confirm('Are you sure you want to delete ' + name + '?')) {
        this.afs.doc('bikes/' + bikeId).delete();
    }
  }
}
