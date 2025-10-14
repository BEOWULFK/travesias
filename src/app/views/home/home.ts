import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../ui/navbar/navbar';
import { Card, Lugar } from '../../shared/card/card';
import * as lugaresData from '../../../assets/data/lugares.json';

@Component({
  selector: 'app-home',
  imports: [Navbar, Card, CommonModule],
  standalone : true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  lugares: Lugar[] = [];

  ngOnInit() {
    this.loadLugares();
  }

  private loadLugares() {
    // Cargamos los datos desde el JSON
    const lugares = (lugaresData as any).default || lugaresData;
    this.lugares = lugares.map((lugar: any) => ({
      ...lugar,
      imagen: `assets/img/${lugar.imagen}`
    }));
  }
}
