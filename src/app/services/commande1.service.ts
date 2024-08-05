import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Commande1Service {
  private apiUrl = 'http://localhost:8000/api/commande1'; // URL de l'API

  constructor(private http: HttpClient) { }

  getCommandes(params?: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { params });
  }


getBurger(id: number): Observable<any> {
  return this.http.get<any>(`http://localhost:8000/api/burgers/${id}`);
}

getCommandesByStatut(statut: string): Observable<any[]> {
  let params = new HttpParams().set('statut', statut);
  return this.http.get<any[]>(this.apiUrl, { params });
}


  createCommande(commande: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, commande);
  }

  getCommande(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
  updateCommande(id: number, commande: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, commande); // Assurez-vous que cette URL est correcte
  }
  

  deleteCommande(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`); // Méthode DELETE pour supprimer
  }

  sendEmail(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/send-email`, {});
  }
}
