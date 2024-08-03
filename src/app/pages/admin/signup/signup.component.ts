import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  model: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.register(this.model).subscribe(
      response => {
        // Gérer la réponse de l'API
        console.log('Inscription réussie:', response);
        // Par exemple, rediriger vers la page de connexion ou afficher un message
        this.router.navigate(['/login']);
        
      },
      error => {
        // Gérer les erreurs
        console.error('Erreur lors de l\'inscription:', error);
      }
    );
  }
}
