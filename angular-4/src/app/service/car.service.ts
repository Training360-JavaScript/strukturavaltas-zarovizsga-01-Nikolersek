import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`https://nettuts.hu/jms/Nikolersek/cars`);
  }

  get(id: number): Observable<Car[]> {
    return this.http.get<Car[]>(`https://nettuts.hu/jms/Nikolersek/cars/${id}`);
  }

  update(car: Car): Observable<Car> {
    return this.http.patch<Car>(
      `https://nettuts.hu/jms/Nikolersek/cars/${car.id}`,
      car,
    );
  }

  create(car: Car): Observable<Car> {
    return this.http.post<Car>(
      `https://nettuts.hu/jms/Nikolersek/cars`,
      car,
    );
  }

  delete(id: number): Observable<Car[]> {
    return this.http.delete<Car[]>(`https://nettuts.hu/jms/Nikolersek/cars/${id}`);
  }

}
