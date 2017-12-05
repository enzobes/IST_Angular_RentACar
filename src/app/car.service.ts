import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from './car';
import { CARS } from './mock-cars';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) {}

  getCars(): Promise<Car[]> {
    return Promise.resolve(CARS);
  }

  getCar(id: number): Promise<Car> {
    /** update this method with this.http.get... see https://angular.io/guide/http) **/
    return Promise.resolve(CARS[id]);
  }

  rent(car) {
    car.rented = true;
  }

  getBack(car) {
    car.rented = false;
  }

}
