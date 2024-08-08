import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  tabArticles: any = [];
  selectedFile: File | null = null;
  newBurger: any = { image: null }; // Pour ajouter un nouveau burger
  burgerToEdit: any = null; // Pour stocker les détails du burger à éditer

  constructor(private burgerService: BurgerService, private router: Router) {}

  ngOnInit(): void {
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
  
  

  archiveBurger(id: number): void {
    this.burgerService.archiveBurger(id).subscribe(
      (data: any) => {
        console.log('Burger archivé avec succès', data);
        this.getBurgers();
      },
      (error) => {
        console.error('Erreur lors de l\'archivage du burger', error);
      }
    );
  }

    // Méthode pour désarchiver un burger
    restoreBurger(id: number): void {
      this.burgerService.restoreBurger(id).subscribe(
        (data: any) => {
          console.log('Burger réactivé avec succès', data);
          this.getBurgers(); // Recharger la liste des burgers
        },
        (error) => {
          console.error('Erreur lors de la réactivation du burger', error);
        }
      );
    }
}
