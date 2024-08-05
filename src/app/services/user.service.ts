import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api'; // URL de votre API Laravel

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user-details`);
  }
}