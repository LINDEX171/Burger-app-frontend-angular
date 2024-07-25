import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private httpClient: HttpClient) { }

  getBurgers(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}burgers`);
  }

  addBurger(burgerData: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}addburgers`, burgerData);
  }
}