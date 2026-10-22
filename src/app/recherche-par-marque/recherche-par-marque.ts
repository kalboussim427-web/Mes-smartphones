import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../model/smartphones.model';
import { SmartphoneService } from '../services/smartphone';
import { Marque } from '../model/marque.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-recherche-par-marque',
  styles: ``,
  templateUrl: './recherche-par-marque.html',
  standalone: true,
})
export class RechercheParMarqueComponent implements OnInit {
  smartphones!: Smartphone[] ;
  idMarque!: number;
  marques!: Marque[];
  

  constructor(private smartphoneService: SmartphoneService) {}

  ngOnInit(): void {
    this.smartphoneService.listeMarques().subscribe(marques => {
      this.marques = marques;
    });
  }

  onChange(): void {
    this.smartphoneService.rechercheParMarque(this.idMarque).subscribe(prods => {
      this.smartphones=prods;
  });
}
}
