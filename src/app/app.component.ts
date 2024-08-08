import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'burger-app';

  constructor(private authService: AuthService,public router: Router) {}

  isSpecialPage(): boolean {
    const specialPaths = ['/login', '/burger', '/signup', '/burger1', '/nav', '/success'];
    const currentUrl = this.router.url;
  
    // Vérifie si l'URL actuelle est l'une des routes spéciales fixes
    if (specialPaths.includes(currentUrl)) {
      return true;
    }
  
    // Vérifie si l'URL actuelle correspond au modèle de route dynamique
    const commandPathRegex = /^\/commande\/\d+$/;
    if (commandPathRegex.test(currentUrl)) {
      return true;
    }
  
    return false;
  }
  
  


  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']); // Redirige vers la page de login après la déconnexion
      },
      error: (err) => {
        console.error('Erreur lors de la déconnexion', err);
        // Gérer l'erreur si nécessaire
      }
    });
  }
}
