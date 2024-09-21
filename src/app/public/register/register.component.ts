import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.model).subscribe(
      (response) => {
        console.log('Inscription réussie!', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error("Erreur lors de l'inscription", error);
        // Afficher les erreurs
        if (error.error.errors) {
          // Affichez les erreurs de validation
          this.displayValidationErrors(error.error.errors);
        } else {
          // Affichez un message d'erreur générique
          alert("Erreur d'inscription, veuillez réessayer.");
        }
      }
    );
  }

  displayValidationErrors(errors: any) {
    // Logique pour afficher les erreurs à l'utilisateur
    Object.keys(errors).forEach((key) => {
      console.error(`${key}: ${errors[key].join(', ')}`);
      alert(`${key}: ${errors[key].join(', ')}`);
    });
  }
}
