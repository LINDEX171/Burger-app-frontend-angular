// src/app/components/statistics/statistics.component.ts

import { Component, OnInit } from '@angular/core';
import { StatistiqueService } from '../../services/statistique.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  enCoursCount: number = 0;
  termineeCount: number = 0;

  constructor(private statistiqueService: StatistiqueService) { }

  ngOnInit(): void {
    this.loadStatusCounts();
  }

  loadStatusCounts(): void {
    this.statistiqueService.getStatusCounts().subscribe(data => {
      this.enCoursCount = data.data.en_cours;
      this.termineeCount = data.data.terminee;
    }, error => {
      console.error('Erreur lors du chargement des statistiques', error);
    });
  }
}
