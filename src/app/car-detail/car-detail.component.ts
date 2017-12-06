import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'car-detail',
  templateUrl: './car-detail.component.html'
})
export class CarDetailComponent implements OnInit {
  title = 'Selected Car';
  
  car: Car;

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.carService.getCar(+params.get('id')))
      .subscribe(car => this.car = car);
  }

  rent(car,client): void {
    this.carService.rent(car,client);
  }

  cancelRental(car): void {
    this.carService.getBack(car);
  }

  goBack(): void {
    this.location.back();
  }
  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
