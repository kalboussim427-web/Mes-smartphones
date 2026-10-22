import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Smartphone } from '../model/smartphones.model';
import { SmartphoneService } from '../services/smartphone';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-smartphones',
  styleUrl: './smartphones.css',
  templateUrl: './smartphones.html',
  standalone: true,
})
export class SmartphonesComponent implements OnInit {
  smartphones! : Smartphone[];

  constructor(private smartphoneService: SmartphoneService) {
  }

  ngOnInit(): void {
    this.chargerSmartphones();
  }
  chargerSmartphones(){
    this.smartphoneService.listeSmartphones().subscribe(prods => {
      this.smartphones = prods;
    });
  }
  supprimerSmartphone(smartphone: Smartphone) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.smartphoneService.supprimerSmartphone(smartphone).subscribe(() => {
        console.log("Smartphone supprimé");
        this.chargerSmartphones();
      });
    }
  }
}

