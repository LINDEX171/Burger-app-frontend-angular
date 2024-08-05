// listcommande.component.ts

import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.css']
})
export class ListcommandeComponent implements OnInit {
  tabArticles: any[] = [];

  constructor(private commandeService: CommandeService) {}

  ngOnInit(): void {
    this.getCommandes();
  }

  getCommandes(): void {
    this.commandeService.getCommandes().subscribe(
      (data: any[]) => {
        this.tabArticles = data;
        console.log(this.tabArticles); 
      },
      (error) => {
        console.log(error); 
      }
    );
  }
}
