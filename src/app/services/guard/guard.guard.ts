import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Utilisation de la fonction inject pour accéder aux services
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
