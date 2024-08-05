import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.http.post<any>('http://localhost:8000/api/login', this.form.getRawValue(), {
      withCredentials: true // Utilisez true si vous utilisez des cookies pour le jeton d'authentification
    }).subscribe(
      (response) => {
        localStorage.setItem('token', response.access_token); // Sauvegarde du jeton dans localStorage
        this.router.navigate(['/burger']);
      },
      (error) => {
        console.error('Erreur de connexion :', error);
        // Gérer les erreurs de connexion ici
      }
    );
  }
}
