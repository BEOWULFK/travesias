import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verificar si hay un estado de login guardado en localStorage solo en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const savedState = localStorage.getItem('isLoggedIn');
      if (savedState === 'true') {
        this.isLoggedInSubject.next(true);
      }
    }
  }

  login(email: string, password: string): boolean {
    // Simulación de login - acepta cualquier credencial
    if (email && password) {
      this.isLoggedInSubject.next(true);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('isLoggedIn', 'true');
      }
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('isLoggedIn');
    }
  }

  isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }
}
