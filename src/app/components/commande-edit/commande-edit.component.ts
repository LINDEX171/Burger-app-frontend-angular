import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande1Service } from '../../services/commande1.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-commande-edit',
  templateUrl: './commande-edit.component.html',
  styleUrls: ['./commande-edit.component.css']
})
export class CommandeEditComponent implements OnInit {
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
    const commandeId = this.route.snapshot.paramMap.get('id'); // Récupère l'ID de l'URL
    if (commandeId) {
      this.loadCommande(commandeId);
    }
  }

  loadCommande(id: string): void {
    this.commandeService.getCommande(+id).subscribe(data => {
      this.commande = data;
      this.commande.date_commande = formatDate(new Date(this.commande.date_commande), 'yyyy-MM-ddTHH:mm', 'en-US');
      this.loadBurger(this.commande.burger_id);
    });
  }

  loadBurger(burgerId: number): void {
    this.commandeService.getBurger(burgerId).subscribe(data => {
      this.burger = data;
    });
  }

  save(): void {
    if (this.commande.id) {
      this.commandeService.updateCommande(this.commande.id, this.commande) // Utilise l'ID pour la mise à jour
        .subscribe(() => this.router.navigate(['/commandes']));
    }
  }
}
