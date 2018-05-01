import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

import { Bike } from './bike';

@Component({
    selector:'bike-form',
    templateUrl: 'bike-form.component.html'
})
export class BikeFormComponent  {
    id;
    form: FormGroup;
    title: string;
    bike = new Bike();
    item;

    constructor(fb: FormBuilder, private _router: Router, private _route: ActivatedRoute,
        private db: AngularFireDatabase) {
        this.form = fb.group({

            frameColor: ['', Validators.required],
            wheels: ['', Validators.required],
            headsetFront: ['', Validators.required],
            headsetRear: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.id = params['id'];
        });

        if (!this.id) {
            this.title = 'New Bike';
        }
        else {
            this.title = 'Edit Bike';
            this.item = this.db.object(this.id);
        }
    }

    submit() {
        if (this.id) {
            this.db.object(this.id).update({
                frameColor: this.bike.frameColor,
                wheels: this.bike.wheels
            });
        }
        else {
            this.db.list('/bikes').push({
                frameColor: this.bike.frameColor,
                wheels: this.bike.wheels
            });
        }

        this._router.navigate(['']);
    }

}