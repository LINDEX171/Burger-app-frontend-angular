import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-add-burger',
  templateUrl: './add-burger.component.html',
  styleUrls: ['./add-burger.component.css']
})
export class AddBurgerComponent {
  burger: any = {
    name: '',
    price: '',
    description: ''
  };
  image: File | null = null;

  constructor(private burgerService: BurgerService, private router: Router) { }

  onFileChange(event: any) {
    this.image = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.burger.name);
    formData.append('price', this.burger.price);
    formData.append('description', this.burger.description);
    if (this.image) {
      formData.append('image', this.image);
    }

    this.burgerService.addBurger(formData).subscribe(response => {
      console.log('Burger ajouté avec succès', response);
      this.router.navigate(['/burgers']); // Rediriger vers la liste des burgers
    }, error => {
      console.error('Erreur lors de l\'ajout du burger', error);
    });
  }
}
