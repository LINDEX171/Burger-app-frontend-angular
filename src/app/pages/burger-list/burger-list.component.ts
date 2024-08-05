import { Component, OnInit } from '@angular/core';
import { BurgerService } from '../../services/burger.service'; // Assurez-vous que le service est correctement importé

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {
  burgers: any[] = [];

  constructor(private burgerService: BurgerService) { }

  ngOnInit(): void {
    this.loadBurgers();
  }

  loadBurgers(): void {
    this.burgerService.getBurgers().subscribe(data => {
      this.burgers = data.data; // Adapter en fonction de la structure de votre réponse API
    });
  }
}
