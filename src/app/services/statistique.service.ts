// src/app/services/statistique.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private apiUrl = 'http://127.0.0.1:8000/api/'; // URL de l'API

  constructor(private http: HttpClient) { }

  getStatusCounts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}statut`);
  }
}
