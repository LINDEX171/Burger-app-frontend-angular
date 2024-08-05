import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private httpClient: HttpClient) { }

  getCommandes(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}commandes`);
  }

}