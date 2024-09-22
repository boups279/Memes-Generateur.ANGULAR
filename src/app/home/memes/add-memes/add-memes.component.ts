import { Component, ElementRef, ViewChild } from '@angular/core';
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
  styleUrls: ['./add-memes.component.scss']
})
export class AddMemesComponent {
  @ViewChild('exampleModalToggle') modal!: ElementRef;

  url: string = '';
  imagePreview: any; // Ajoutez cette ligne pour l'aperçu de l'image
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

      // Créer une URL pour l'aperçu de l'image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result; // Stocke l'URL de l'image
      };
      reader.readAsDataURL(file); // Lire le fichier et déclencher l'événement onload
    }
  }

  checkConditionAndClose() {
    const condition = true; // Remplacez ceci par votre condition réelle

    if (condition) {
      this.closeModal();
    }
  }

  closeModal() {
    const modalElement = this.modal.nativeElement;
    // const modal = bootstrap.Modal.getInstance(modalElement); // Récupère l'instance du modal

    // if (modal) {
    //   modal.hide(); // Ferme le modal
    // }
  }

  onSubmit(): void {
    if (this.url !== '') {
      this.authService.selected_memes = this.url;
      console.log('this.authService.selected_memes', this.authService.selected_memes);
      console.log('url', this.url);
    } else {
      // Vérifiez si l'image n'est pas null avant d'appeler le service
      if (this.meme.name && this.meme.image) {
        this.authService.addMeme({
          name: this.meme.name,
          image: this.meme.image
        }).subscribe(
          (response) => {
            console.log('Mème ajouté avec succès !', response);
            // Supposons que la réponse contient le chemin de l'image
            if (response.imagePath) {
              this.authService.selected_memes = 'http://127.0.0.1:8000/storage/'+response.imagePath; // Ajustez en fonction de votre réponse
              console.log('Chemin de l\'image:', this.authService.selected_memes);
              this.checkConditionAndClose();
            }
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
}
  

  // Soumission du formulaire
//   onSubmit(): void {
    
//     if (this.url != '') {
//       this.authService.selected_memes = this.url;
//       console.log('this.authService.selected_memes', this.authService.selected_memes);
//       console.log('url', this.url);

//     }else{

//     // Vérifiez si l'image n'est pas null avant d'appeler le service
//     if (this.meme.name && this.meme.image) {
//       this.authService.addMeme({
//         name: this.meme.name,
//         image: this.meme.image
//       }).subscribe(
//         (response) => {
//           console.log('Mème ajouté avec succès !', response);
//           // this.authService.selected_memes = this.imagePreview
//         },
//         (error: HttpErrorResponse) => {
//           console.error('Erreur lors de l\'ajout du mème:', error);
//         }
//       );
//     } else {
//       console.error('Image ou nom manquant');
//     }
//     }
//   }
// }
