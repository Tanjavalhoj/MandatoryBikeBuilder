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

  usersCol: AngularFirestoreCollection<Bike>;
  bikes: any;

  constructor(private afs: AngularFirestore, private _router: Router) {

  }

  ngOnInit() {
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  add() {
    this._router.navigate(['add']);
  }

  delete(userId, name) {
    if (confirm('Are you sure you want to delete ' + name + '?')) {
        this.afs.doc('users/' + userId).delete();
    }
  }
}
