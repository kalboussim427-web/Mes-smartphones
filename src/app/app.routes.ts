import { Routes } from '@angular/router';
import { SmartphonesComponent } from './smartphones/smartphones';
import { AddSmartphoneComponent } from './add-smartphone/add-smartphone';
import { UpdateSmartphoneComponent } from './update-smartphone/update-smartphone';

export const routes: Routes = [
    { path : 'smartphones' , component: SmartphonesComponent },
    { path : 'add-smartphone' , component: AddSmartphoneComponent},
    { path : 'updateSmartphone/:id' , component: UpdateSmartphoneComponent},
    { path : '' , redirectTo : 'smartphones' , pathMatch : 'full' }
];
