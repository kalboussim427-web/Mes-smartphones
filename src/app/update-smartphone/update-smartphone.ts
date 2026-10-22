import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Smartphone } from '../model/smartphones.model';
import { SmartphoneService } from '../services/smartphone';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque.model';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-update-smartphone',
  styleUrl: './update-smartphone.css',
  templateUrl: './update-smartphone.html',
  standalone: true,
})
export class UpdateSmartphoneComponent implements OnInit {
  currentSmartphone = new Smartphone();

  marques! : Marque[];
  updateMarqueId! : number;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private smartphoneService: SmartphoneService
  ) {}

  ngOnInit(): void {
    this.smartphoneService.listeMarques().subscribe(marqs =>{
      this.marques=marqs;
    }

    )
    let id = this.activateRoute.snapshot.params['id'];
    this.smartphoneService.consulterSmartphone(id).subscribe(prods => {
      this.currentSmartphone = prods;
      this.updateMarqueId = this.currentSmartphone.marque.idMarque;

    });
  }
  updateSmartphone() {
    this.smartphoneService.updateSmartphone(this.currentSmartphone).subscribe(() => {
      this.router.navigate(['smartphones']);
    });
    
  }
}
