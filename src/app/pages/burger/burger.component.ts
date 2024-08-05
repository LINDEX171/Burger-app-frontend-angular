import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BurgerService } from 'src/app/services/burger.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent  implements OnInit {
  message = ""
  tabArticles: any = [];
  selectedFile: File | null = null;
  newBurger: any = {
    image: null // Initialiser image à null
  };
  userName: string | null = null;

  constructor(private burgerService: BurgerService,public router: Router,private userService: UserService,private http:HttpClient) {}

  
  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.name}`;
        
      },
      err => {
        this.message = 'You are not logged in';
      }
    );
    this.getBurgers();
    this.userService.getUserDetails().subscribe(
      user => {
        this.userName = user.name; // Remplacez 'name' par la propriété appropriée selon votre API
      },
      error => {
        console.error('Error fetching user details:', error);
      }
    );
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
  


  
}