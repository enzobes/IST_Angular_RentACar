import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'my-cars',
  templateUrl: './cars.component.html'
})

export class CarsComponent implements OnInit {

  title = 'Car Rental';
  cars;
  selectedCar: Car;

  constructor(
    private carService: CarService,
    private router: Router) { }

  getCars(): void {
    this.carService.getCars().then(cars => this.cars = cars);
  }

  ngOnInit(): void {
    this.getCars();
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCar.id]);
  }

}
