import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Navbar } from '../../ui/navbar/navbar';
import { Lugar } from '../../shared/card/card';
import * as lugaresData from '../../../assets/data/lugares.json';

@Component({
  selector: 'app-detail',
  imports: [CommonModule, Navbar],
  standalone: true,
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail implements OnInit {
  lugar: Lugar | null = null;
  lugares: Lugar[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadLugares();
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.lugar = this.lugares.find(l => l.id === id) || null;
    });
  }

  private loadLugares() {
    const lugares = (lugaresData as any).default || lugaresData;
    this.lugares = lugares.map((lugar: any) => ({
      ...lugar,
      imagen: `assets/img/${lugar.imagen}`
    }));
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
