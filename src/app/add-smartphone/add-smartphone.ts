import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Smartphone } from '../model/smartphones.model';
import { SmartphoneService } from '../services/smartphone';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-add-smartphone',
  styleUrl: './add-smartphone.css',
  templateUrl: './add-smartphone.html',
  standalone: true,
})
export class AddSmartphoneComponent implements OnInit {
  NewSmartphone = new Smartphone();

  constructor(private smartphoneService: SmartphoneService, private router: Router) {}

  ngOnInit(): void {}

  addSmartphone() {
    this.smartphoneService.ajouterSmartphone(this.NewSmartphone);
    this.router.navigate(['smartphones']);
  }
}
