import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  standalone : true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  private authSubscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authSubscription = this.authService.isLoggedIn$.subscribe(
      (loggedIn) => {
        this.isLoggedIn = loggedIn;
      }
    );
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onLoginClick() {
    this.router.navigate(['/login']);
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
