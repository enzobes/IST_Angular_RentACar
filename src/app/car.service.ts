import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from './car';
//import { CARS } from './mock-cars';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) {}

  getCars(): Promise<Car[]> {
      const cars = new Promise(fulfill => {
        this.http.get('http://localhost:8080/voiture').subscribe(data => {
          fulfill(data);
        });
      });
    return Promise.resolve(cars);
  }

  getCar(id: number): Promise<Car> {
      const car = new Promise(fulfill => {
        this.http.get('http://localhost:8080/voiture/'+id).subscribe(data => {
          fulfill(data);
        });
      });

    return Promise.resolve(car);
  }

  rent(car, client) {
    const body = {
      firstName: client.firstName,
      lastName: client.lastName
    }
   const uri = this.http.put('http://localhost:8080/louer/'+car.id, body) .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("error:"+JSON.stringify(err));
        }
      );

  }


  getBack(car) {
      const uri = this.http.post('http://localhost:8080/retourner/'+car.id, {
      location: 'true'
    }) .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("error:"+JSON.stringify(err));
        }
      );
  }
}
