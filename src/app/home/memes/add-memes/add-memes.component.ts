import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-memes',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './add-memes.component.html',
  styleUrl: './add-memes.component.scss'
})
export class AddMemesComponent {
  url: string = '';
  // name: string = '';
  // imageFile: File | null = null;
  // message: string = '';

  // constructor(private  authService: AuthService, private router: Router) {}

  // onFileChange(event: any): void {
  //   this.imageFile = event.target.files[0];
  // }

  // addMeme(): void {
  //   if (this.name && this.imageFile) {
  //     this.authService.addMeme({ name: this.name, image: this.imageFile }).subscribe({
  //       next: (response) => {
  //         this.message = 'Mème ajouté avec succès!';
  //         this.router.navigate(['/home']); // Redirige vers la page des mèmes
  //       },
  //       error: (error) => {
  //         this.message = 'Erreur lors de l\'ajout du mème.';
  //         console.error(error);
  //         console.log('memes=', this.name, this.imageFile)
  //       }
  //     });
  //   } else {
  //     this.message = 'Veuillez remplir tous les champs.';
  //   }
  // }
  meme = {
    name: '',
    image: null as File | null, // Fichier d'image, accepté comme File ou null
  };

  constructor(private authService: AuthService) {}

  // Méthode pour sélectionner le fichier
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.meme.image = file;
    }
  }

  // Soumission du formulaire
  onSubmit(): void {
    // Vérifiez si l'image n'est pas null avant d'appeler le service
    if (this.meme.name && this.meme.image) {
      this.authService.addMeme({
        name: this.meme.name,
        image: this.meme.image
      }).subscribe(
        (response) => {
          console.log('Mème ajouté avec succès !', response);
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de l\'ajout du mème:', error);
        }
      );
    } else {
      console.error('Image ou nom manquant');
    }
  }
}