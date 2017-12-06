import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { Router } from '@angular/router';

import { CarService } from '../car.service';
@Component({
  selector: 'app-get-back',
  templateUrl: './get-back.component.html',
  styleUrls: ['./get-back.component.css']
})
export class GetBackComponent implements OnInit {
  selectedCar: Car;
  title = 'Get Back Car';

  cars;
  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  getCars(): void {
    this.carService.getCars().then(cars => this.cars = cars);
  }
  ngOnInit() {
    this.getCars();

  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }
  cancelRental(car): void {
    this.carService.getBack(car);
    window.location.reload();    
    this.selectedCar = undefined;
  }



}
