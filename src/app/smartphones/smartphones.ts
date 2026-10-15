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
    this.smartphones = this.smartphoneService.listeSmartphones();
  }

  ngOnInit(): void {
  }
  supprimerSmartphone(smartphone: Smartphone) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.smartphoneService.supprimerSmartphone(smartphone);
      this.smartphones = this.smartphoneService.listeSmartphones();
    }
  }
}

