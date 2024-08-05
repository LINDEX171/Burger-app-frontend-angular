import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-burger-edit',
  templateUrl: './burger-edit.component.html',
  styleUrls: ['./burger-edit.component.css']
})
export class BurgerEditComponent implements OnInit {
  burger: any = {
    name: '',
    price: '',
    description: '',
    is_active: true
  };
  image: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private burgerService: BurgerService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.burgerService.getBurger(id).subscribe(data => {
        this.burger = data;
      });
    });
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('name', this.burger.name);
    formData.append('price', this.burger.price);
    formData.append('description', this.burger.description);
    formData.append('is_active', this.burger.is_active ? '1' : '0');
    if (this.image) {
      formData.append('image', this.image, this.image.name);
    }

    this.burgerService.updateBurger(this.burger.id, formData).subscribe(() => {
      this.router.navigate(['/burgers']);
    });
  }
}
