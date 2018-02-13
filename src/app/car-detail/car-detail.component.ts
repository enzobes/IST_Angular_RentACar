import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Client } from '../client';
import { Router } from '@angular/router';

@Component({
  selector: 'car-detail',
  templateUrl: './car-detail.component.html'
})
export class CarDetailComponent implements OnInit {
  title = 'Selected Car';

  car: Car;
  client: Client;

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.carService.getCar(+params.get('id')))
      .subscribe(car => this.car = car,
      client => this.client=client);

  }

  rent(car, firstName, lastName): void {
    let client = new Client();
    client.firstName=firstName;
    client.lastName=lastName;
    console.log(client);
    this.carService.rent(car,client);
    this.router.navigate(['/cars']);
    location.reload();
  
  }

  cancelRental(car): void {
    this.carService.getBack(car);
    location.reload();
  }

  goBack(): void {
    this.location.back();
  }
  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
