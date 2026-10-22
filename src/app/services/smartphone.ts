import { Smartphone } from '../model/smartphones.model';
import { Injectable } from '@angular/core';
import { Marque } from '../model/marque.model';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable(
    {providedIn: 'root'}
)
export class SmartphoneService {
    smartphones: Smartphone[] ;
    marques : Marque[];
    apiURL: string = '/smartphones/api';

    constructor(private http: HttpClient) {
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
    listeMarques():Observable<Marque[]>{
        return this.http.get<Marque[]>(this.apiURL + "/marque");
    }
    consulterMarque(id: number): Marque {
        return this.marques.find(m => m.idMarque== id)!;
    }
    listeSmartphones(): Observable<Smartphone[]> {
        return this.http.get<Smartphone[]>(this.apiURL) ;
    }
    ajouterSmartphone(smartphone: Smartphone) {
        this.smartphones.push(smartphone) ;
    }
    supprimerSmartphone(smartphone: Smartphone) {
        const url = '${this.apiURL}/${smartphone.idSmartphone}';
        return this.http.delete(url);
        }
    
    consulterSmartphone(id: number): Observable<Smartphone> {
        const url = '${this.apiURL}/${id}';
        return this.http.get<Smartphone>(url);   
    }
    updateSmartphone(prod: Smartphone):Observable<Smartphone> {
        return this.http.put<Smartphone>(this.apiURL, prod);
        
    }
    
    rechercheParMarque(idMarque: number):Observable <Smartphone[]> {
        const url ='${this.apiURL}/smarphonesByMarque/${idMarque}';
        return this.http.get<Smartphone[]>(url);
    }
    rechercherParNom(nom: string): Observable<Smartphone[]>{
        const url = '${this.apiURL}/smartphonesByName/${nom}';
        return this.http.get<Smartphone[]>(url);
    }
}