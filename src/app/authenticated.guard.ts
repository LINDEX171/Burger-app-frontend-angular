import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements  CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Vérifie si l'utilisateur est connecté
    if (this.authService.isAuthenticated()) {
      return true; // Permet l'accès si l'utilisateur est connecté
    } else {
      this.router.navigate(['/login']); // Redirige vers la page de connexion ou une autre page
      return false; // Bloque l'accès si l'utilisateur n'est pas connecté
    }
  }
}