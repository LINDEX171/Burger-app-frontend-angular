// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; // URL de ton API Laravel
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

    register(data: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/register`, data).pipe(
        catchError(this.handleError)
      );
    }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
          this.userSubject.next(response.user);
        }
      })
    );
  }


  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      catchError(this.handleError)
    );
  } 

  private handleError(error: any) {
    console.error('Erreur de service :', error);
    return throwError(error);
  }
}