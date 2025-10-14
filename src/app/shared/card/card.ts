import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface Lugar {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  tipo: string;
  ubicacion: string;
}

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone : true,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() lugar!: Lugar;

  constructor(private router: Router) {}

  onCardClick() {
    this.router.navigate(['/detalle', this.lugar.id]);
  }
}
