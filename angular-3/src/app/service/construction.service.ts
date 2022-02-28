import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from 'src/app/model/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`https://nettuts.hu/jms/Nikolersek/constructions`);
  }

  get(id: number): Observable<Construction[]> {
    return this.http.get<Construction[]>(`https://nettuts.hu/jms/Nikolersek/constructions/${id}`);
  }

  update(construction: Construction): Observable<Construction> {
    return this.http.patch<Construction>(
      `https://nettuts.hu/jms/Nikolersek/constructions/${construction.id}`,
      construction,
    );
  }

  create(construction: Construction): Observable<Construction> {
    return this.http.post<Construction>(
      `https://nettuts.hu/jms/Nikolersek/constructions`,
      construction,
    );
  }

  delete(id: number): Observable<Construction[]> {
    return this.http.delete<Construction[]>(`https://nettuts.hu/jms/Nikolersek/constructions/${id}`);
  }

}
