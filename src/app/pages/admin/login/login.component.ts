// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  
  constructor(private authService: AuthService,private router:Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        // Connexion réussie
        this.router.navigate(['/nav']); 
        this.errorMessage = '';
      },
      error: (err) => {
        // Afficher une erreur si nécessaire
        this.errorMessage = 'Détails de connexion invalides';
      }
    });
  }
}


