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

  rent(voiture, client) {
   const req = this.http.put('http://localhost:8080/louer/'+voiture.id, {
      location: 'true',
    }) .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured:"+err);
        }
      );
  }
 

  getBack(voiture) {
      const req = this.http.post('http://localhost:8080/retourner/'+voiture.id, {
      location: 'false'
    }) .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured:"+JSON.stringify(err));
        }
      );
  }
}
