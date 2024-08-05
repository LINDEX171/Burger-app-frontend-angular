import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande1Service } from '../../services/commande1.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-commande-form',
  templateUrl: './commande-form.component.html',
  styleUrls: ['./commande-form.component.css']
})
export class CommandeFormComponent implements OnInit {
  commande: any = {
    nom: '',
    prenom: '',
    email: '',
    burger_id: null,
    statut: 'en_attente',
    date_commande: ''
  };
  burger: any;

  constructor(
    private route: ActivatedRoute,
    private commandeService: Commande1Service,
    private router: Router
  ) { }

  ngOnInit(): void {
    const burgerId = this.route.snapshot.paramMap.get('burgerId');
    if (burgerId) {
      this.commande.burger_id = +burgerId;
      this.loadBurger(burgerId);
      // Set the current date as the date_commande
      this.commande.date_commande = formatDate(new Date(), 'yyyy-MM-ddTHH:mm', 'en-US');
    }
  }

  loadBurger(burgerId: string): void {
    this.commandeService.getBurger(+burgerId).subscribe(data => {
      this.burger = data;
    });
  }

  save(): void {
    this.commandeService.createCommande(this.commande)
      .subscribe(() => this.router.navigate(['/commandes']));
  }
}
