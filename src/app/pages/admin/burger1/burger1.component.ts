import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-burger1',
  templateUrl: './burger1.component.html',
  styleUrls: ['./burger1.component.css']
})
export class Burger1Component implements OnInit {
  message = "you are not logged in"
  tabArticles: any = [];
  selectedFile: File | null = null;
  newBurger: any = {
    image: null // Initialiser image à null
  };

  constructor(private burgerService: BurgerService, private router: Router,private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user')
    this.getBurgers();
  }

  getBurgers(): void {
    this.burgerService.getBurgers().subscribe(
      (data: any) => {
        this.tabArticles = data.data;
        console.log(this.tabArticles);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Méthode appelée lorsqu'un fichier est sélectionné
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  addBurger(): void {
    const formData = new FormData(); // Utilisation de FormData pour envoyer le fichier
    formData.append('name', this.newBurger.name);
    formData.append('price', this.newBurger.price.toString());
    formData.append('description', this.newBurger.description);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.burgerService.addBurger(formData).subscribe(
      (data: any) => {
        console.log('Burger ajouté avec succès', data);
        this.getBurgers();
        this.newBurger = {}; // Réinitialiser le formulaire après l'ajout
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du burger', error);
      }
    );
  }
  
  
  // Méthode pour rediriger vers la page de connexion
  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}