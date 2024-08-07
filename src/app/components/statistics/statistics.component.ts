import { Component, OnInit } from '@angular/core';
import { StatistiqueService } from '../../services/statistique.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  enCoursCount: number = 0;
  termineeCount: number = 0;
  payeeCount: number = 0;
  annuleeCount: number = 0;
  commandesToday: number = 0; // Nouvelle propriété

  constructor(private statistiqueService: StatistiqueService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadStatusCounts();
  }

  loadStatusCounts(): void {
    this.statistiqueService.getStatusCounts().subscribe(data => {
      console.log('Données reçues:', data);
      this.enCoursCount = data.data.en_cours;
      this.termineeCount = data.data.terminee;
      this.payeeCount = data.data.payeeCount;
      this.annuleeCount = data.data.annuleeCount;
      this.commandesToday = data.data.commandes_today; // Récupérer les commandes d'aujourd'hui
      this.cd.detectChanges();
    }, error => {
      console.error('Erreur lors du chargement des statistiques', error);
    });
  }
}
