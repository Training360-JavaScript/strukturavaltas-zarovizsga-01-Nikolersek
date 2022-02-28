import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from 'src/app/model/drug';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Drug[]> {
    return this.http.get<Drug[]>(`https://nettuts.hu/jms/Nikolersek/drugs`);
  }
}
