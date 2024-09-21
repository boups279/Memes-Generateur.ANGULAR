import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe({
      next: (response) => {
        // Sauvegarder le token reçu
        this.authService.saveToken(response.access_token);
        // Rediriger vers la page d'accueil ou autre
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
      }
    });
  }
}
