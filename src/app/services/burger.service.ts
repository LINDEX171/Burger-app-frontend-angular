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


  getBurgers1(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}burgersreactive`);
  }

   
  addBurger(burgerData: FormData): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}addburgers`, burgerData);
  }
  
  
  getBurgerById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}burgers/${id}`);
  }
   

  archiveBurger(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}burgers/${id}`);
  }

   
   // Méthode pour désarchiver (réactiver) un burger
   restoreBurger(id: number): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}burgers/${id}/restore`, {});
  }


  getBurger(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}burgers/${id}`);
  }

  

  updateBurger(id: number, burgerData: FormData): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}burgers/${id}`, burgerData);
  }
  
  
  
   
  
  
  
}