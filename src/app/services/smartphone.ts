import { Smartphone } from '../model/smartphones.model';
import { Injectable } from '@angular/core';
import { Marque } from '../model/marque.model';

@Injectable(
    {providedIn: 'root'}
)
export class SmartphoneService {
    smartphones: Smartphone[] ;
    marques : Marque[];

    constructor() {
        this.marques=[
            {idMarque: 1, nomMarque: "Samsung"},
            {idMarque: 2, nomMarque: "Apple"},
            {idMarque: 3, nomMarque: "Xiaomi"},
            {idMarque: 4, nomMarque: "OPPO"},
            {idMarque: 5, nomMarque: "Vivo"},
            {idMarque: 6, nomMarque: "OnePlus"},
        ];

        this.smartphones = [
            {idSmartphone: 1, nomSmartphone: 'Samsung Galaxy S26 Ultra', prixSmartphone: 3200, dateSortie: new Date('2026-03-11'), osSmartphone: 'One UI' , marque: {idMarque:1, nomMarque: "Samsung" }},
            {idSmartphone: 2, nomSmartphone: 'iPhone 17 Pro Max', prixSmartphone: 3900, dateSortie: new Date('2025-09-19'), osSmartphone: 'iOS', marque: {idMarque:2, nomMarque: "Apple" }},
            {idSmartphone: 3, nomSmartphone: 'Xiaomi 17 Ultra', prixSmartphone: 3700, dateSortie: new Date('2025-12-25'), osSmartphone: 'HyperOS', marque: {idMarque:3, nomMarque: "Xiaomi" }},
            {idSmartphone: 4, nomSmartphone: 'OPPO Find X9 Ultra', prixSmartphone: 3800, dateSortie: new Date('2026-04-21'), osSmartphone: 'ColorOS', marque: {idMarque:4, nomMarque: "OPPO" }},
            {idSmartphone: 5, nomSmartphone: 'Vivo X300 Pro', prixSmartphone: 2700, dateSortie: new Date('2025-10-17'), osSmartphone: 'OriginOS', marque: {idMarque:5, nomMarque: "Vivo" }},
            {idSmartphone: 6, nomSmartphone: 'OnePlus 15', prixSmartphone: 2400, dateSortie: new Date('2025-10-27'), osSmartphone: 'OxygenOS', marque: {idMarque:6, nomMarque: "OnePlus" }},
        ];
    }
    listeMarques(): Marque[]{
        return this.marques;
    }
    consulterMarque(id: number): Marque {
        return this.marques.find(m => m.idMarque== id)!;
    }
    listeSmartphones(): Smartphone[] {
        return this.smartphones ;
    }
    ajouterSmartphone(smartphone: Smartphone) {
        this.smartphones.push(smartphone) ;
    }
    supprimerSmartphone(smartphone: Smartphone) {
        const index = this.smartphones.indexOf(smartphone, 0);
        if (index > -1) {
            this.smartphones.splice(index, 1);
        }
    }
    consulterSmartphone(id: number): Smartphone {
        return this.smartphones.find(p => p.idSmartphone == id)!;   
    }
    updateSmartphone(smartphone: Smartphone) {
        const index = this.smartphones.findIndex(p => p.idSmartphone == smartphone.idSmartphone);
        if (index !== -1) {
            this.smartphones[index] = smartphone;
        }
    }
}