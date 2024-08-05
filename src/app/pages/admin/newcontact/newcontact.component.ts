import { Component, OnInit } from '@angular/core';
import { BurgerService } from 'src/app/services/burger.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {
  id:any;
  tabArticles: any = [];

  burgerForm = this.formBuilder.group({
    name: [''],
    price: [''],
    description: [''],
    image: [''],
});

  selectedFile: File | null = null;
  newBurger: any = {
    image: null // Initialiser image à null
  };

  constructor(private burgerService: BurgerService, private router: Router, 
    private route:ActivatedRoute,private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  this.getBurgers();
  this.id = this.route.snapshot.params['id'];
 this.burgerService.getBurgerById(this.id).subscribe(
    (data: any) => {
      this.tabArticles = data.data;
      console.log(this.tabArticles);
      // Utiliser patchValue pour mettre à jour le formulaire
      this.burgerForm.patchValue({
        name: data.name,
        price: data.price,
        description: data.description
      });
      // Assurez-vous que data.image est bien une URL ou un chemin d'accès valide pour l'image
      this.newBurger.image = data.image;
    },
    (error) => {
      console.log(error);
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
          this.router.navigate(['/contacts']);
      },
      (error) => {
          console.error('Erreur lors de l\'ajout du burger', error);
      }
  );
}
  




  
}