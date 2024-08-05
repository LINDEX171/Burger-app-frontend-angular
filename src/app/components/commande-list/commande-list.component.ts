import { Component, OnInit } from '@angular/core';
import { Commande1Service } from '../../services/commande1.service';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
  commandes: any[] = [];
  selectedStatut: string = '';

  constructor(private commandeService: Commande1Service) { }

  ngOnInit(): void {
    // Charger toutes les commandes au début (optionnel)
    this.loadCommandes();
  }

  loadCommandes(statut: string = ''): void {
    this.commandeService.getCommandesByStatut(statut).subscribe(data => {
      this.commandes = data;
    });
  }

  searchByStatut(): void {
    this.loadCommandes(this.selectedStatut);
  }

  deleteCommande(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette commande ?')) {
      this.commandeService.deleteCommande(id).subscribe(() => {
        this.loadCommandes(this.selectedStatut); // Recharge les commandes après suppression
      });
    }
  }

  sendEmail(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir envoyer un email de confirmation pour cette commande ?')) {
      this.commandeService.sendEmail(id).subscribe(
        () => {
          alert('E-mail envoyé avec succès!');
        },
        (error) => {
          console.error('Erreur lors de l\'envoi de l\'email:', error);
          alert('Erreur lors de l\'envoi de l\'email.');
        }
      );
    }
  }
}
