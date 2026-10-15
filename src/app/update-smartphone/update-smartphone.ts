import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Smartphone } from '../model/smartphones.model';
import { SmartphoneService } from '../services/smartphone';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-update-smartphone',
  styleUrl: './update-smartphone.css',
  templateUrl: './update-smartphone.html',
  standalone: true,
})
export class UpdateSmartphoneComponent implements OnInit {
  currentSmartphone = new Smartphone();

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private smartphoneService: SmartphoneService
  ) {}

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.params['id'];
    this.currentSmartphone = this.smartphoneService.consulterSmartphone(id);
  }
  updateSmartphone() {
    this.smartphoneService.updateSmartphone(this.currentSmartphone);
    this.router.navigate(['smartphones']);
  }
}
