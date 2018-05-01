import { RouterModule } from '@angular/router';
import { BikesComponent } from './bikes.component';
import { BikeFormComponent } from './bike-form.component';

export const routing = RouterModule.forRoot([
    { path: '', component: BikesComponent },
    { path: 'add', component: BikeFormComponent },
    { path: 'add/:id', component: BikeFormComponent }
]);
