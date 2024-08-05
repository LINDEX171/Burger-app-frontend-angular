import { Component, OnInit } from '@angular/core';
import { Commande1Service } from '../../services/commande1.service';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
  commandes: any[] = [];

  constructor(private commandeService: Commande1Service) { }

  ngOnInit(): void {
    this.loadCommandes();
  }

  loadCommandes(): void {
    this.commandeService.getCommandes().subscribe(data => {
      this.commandes = data;
    });
  }

  deleteCommande(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette commande ?')) {
      this.commandeService.deleteCommande(id).subscribe(() => {
        this.loadCommandes(); // Recharge la liste des commandes après la suppression
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
