import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Navbar } from '../../ui/navbar/navbar';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Navbar],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Si ya está logueado, redirigir al home
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.errorMessage = '';
    this.isLoading = true;

    // Simular delay de autenticación
    setTimeout(() => {
      if (this.authService.login(this.email, this.password)) {
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'Credenciales inválidas. Intenta con cualquier email y contraseña.';
      }
      this.isLoading = false;
    }, 1000);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
