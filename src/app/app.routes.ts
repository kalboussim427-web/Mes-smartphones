import { Routes } from '@angular/router';
import { SmartphonesComponent } from './smartphones/smartphones';
import { AddSmartphoneComponent } from './add-smartphone/add-smartphone';
import { UpdateSmartphoneComponent } from './update-smartphone/update-smartphone';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom';

export const routes: Routes = [
    { path : 'smartphones' , component: SmartphonesComponent },
    { path : 'add-smartphone' , component: AddSmartphoneComponent},
    { path : 'updateSmartphone/:id' , component: UpdateSmartphoneComponent},
    { path : '' , redirectTo : 'smartphones' , pathMatch : 'full' },
    { path : "rechercheParMarque" , component : RechercheParMarqueComponent},
    { path : "rechercheParNom" , component: RechercheParNomComponent}
];
