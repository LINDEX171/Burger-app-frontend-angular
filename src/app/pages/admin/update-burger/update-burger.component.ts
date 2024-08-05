import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-update-burger',
  templateUrl: './update-burger.component.html',
  styleUrls: ['./update-burger.component.css']
})
export class UpdateBurgerComponent implements OnInit {
  burger: any = {
    name: '',
    price: '',
    description: ''
  };
  image: File | null = null;
  burgerId!: number;

  constructor(
    private route: ActivatedRoute,
    private burgerService: BurgerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.burgerId = +this.route.snapshot.paramMap.get('id')!;
    this.loadBurger();
  }

  loadBurger(): void {
    this.burgerService.getBurger(this.burgerId).subscribe(data => {
      this.burger = data;
    }, error => {
      console.error('Erreur lors du chargement du burger', error);
    });
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }

  save(): void {
    const formData = new FormData();
    formData.append('name', this.burger.name);
    formData.append('price', this.burger.price);
    formData.append('description', this.burger.description);
    if (this.image) {
      formData.append('image', this.image);
    }

    this.burgerService.updateBurger(this.burgerId, formData).subscribe(response => {
      console.log('Burger mis à jour avec succès', response);
      this.router.navigate(['/burgers']);
    }, error => {
      console.error('Erreur lors de la mise à jour du burger', error);
    });
  }

}
