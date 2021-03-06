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

            framecolor: ['', Validators.required],
            accessory: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.id = params['id'];
        });

        if (!this.id) {
            this.title = 'Ny E8000 BULLITT';
        }
        else {
            this.title = 'Ændre din E8000 BULLITT order';
            this.item = this.db.object(this.id);
        }
    }

    submit() {
        if (this.id) {
            this.db.object(this.id).update({
                framecolor: this.bike.framecolor,
                accessory: this.bike.accessory
            });
            console.log("update");
        }
        else {
            this.db.list('/').push({
                framecolor: this.bike.framecolor,
                accessory: this.bike.accessory
            });
            console.log("push update");
        }

        this._router.navigate(['']);
    }

}
