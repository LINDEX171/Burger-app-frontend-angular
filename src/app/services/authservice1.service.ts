import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authservice1Service {
  
  private apiUrl = 'http://127.0.0.1:8000/api';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password })
      .pipe(map(user => {
        // Stocker les détails de l'utilisateur et le token dans le local storage
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // Retirer l'utilisateur du local storage pour déconnecter l'utilisateur
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  get isLoggedIn(): boolean {
    const user = this.currentUserSubject.value;
    console.log(user)
    return user && user.access_token  ? true : false;
  }
}