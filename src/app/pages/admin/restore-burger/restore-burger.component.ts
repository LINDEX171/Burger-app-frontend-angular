import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-restore-burger',
  templateUrl: './restore-burger.component.html',
  styleUrls: ['./restore-burger.component.css']
})
export class RestoreBurgerComponent implements OnInit {
  tabArticles: any = [];
  selectedFile: File | null = null;
  newBurger: any = { image: null }; // Pour ajouter un nouveau burger
  burgerToEdit: any = null; // Pour stocker les détails du burger à éditer

  constructor(private burgerService: BurgerService, private router: Router) {}

  ngOnInit(): void {
    this.getBurgers1();
  }

  getBurgers1(): void {
    this.burgerService.getBurgers1().subscribe(
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

  
  
  

    // Méthode pour désarchiver un burger
    restoreBurger(id: number): void {
      this.burgerService.restoreBurger(id).subscribe(
        (data: any) => {
          console.log('Burger réactivé avec succès', data);
          this.getBurgers1(); // Recharger la liste des burgers
        },
        (error) => {
          console.error('Erreur lors de la réactivation du burger', error);
        }
      );
      alert('Burger réactivé avec succès !');
    }
}
