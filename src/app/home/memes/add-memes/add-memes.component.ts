import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-memes',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './add-memes.component.html',
  styleUrl: './add-memes.component.scss'
})
export class AddMemesComponent {
  name: string = '';
  imageFile: File | null = null;
  message: string = '';

  constructor(private  authService: AuthService, private router: Router) {}

  onFileChange(event: any): void {
    this.imageFile = event.target.files[0];
  }

  addMeme(): void {
    if (this.name && this.imageFile) {
      this.authService.addMeme({ name: this.name, image: this.imageFile }).subscribe({
        next: (response) => {
          this.message = 'Mème ajouté avec succès!';
          this.router.navigate(['/home']); // Redirige vers la page des mèmes
        },
        error: (error) => {
          this.message = 'Erreur lors de l\'ajout du mème.';
          console.error(error);
          console.log('memes=', this.name, this.imageFile)
        }
      });
    } else {
      this.message = 'Veuillez remplir tous les champs.';
    }
  }
}