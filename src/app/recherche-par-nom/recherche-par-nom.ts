import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Smartphone } from '../model/smartphones.model';
import { SmartphoneService } from '../services/smartphone';
import { SearchFilterPipe } from '../search-filter-pipe';


@Component({
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  selector: 'app-recherche-par-nom',
  styles: ``,
  templateUrl: './recherche-par-nom.html',
  standalone: true,
})
export class RechercheParNomComponent implements OnInit {
  nomSmartphone!: string ;
  smartphones!: Smartphone[];
  allSmartphones!: Smartphone[];
  searchTerm: string= '';

  constructor(private smartphoneService: SmartphoneService){}

  ngOnInit(): void {
    this.smartphoneService.listeSmartphones().subscribe(prods => {
      console.log(prods);
      this.smartphones = prods;
      this.allSmartphones = prods;
    });
  }
  rechercherProds(): void {
    if(this.nomSmartphone){
    this.smartphoneService.rechercherParNom(this.nomSmartphone).subscribe(prods => {
      console.log(prods);
      this.smartphones = prods;
  });
} else {
  this.smartphoneService.listeSmartphones().subscribe(prods => {
    console.log(prods);
    this.smartphones= prods;
});
}
}
onKeyUp(filterText: string){
  this.smartphones=this.allSmartphones.filter(item =>
    item.nomSmartphone.toLowerCase().includes(filterText.toLowerCase())

  );
}
}