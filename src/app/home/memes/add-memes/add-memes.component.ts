import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-memes',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
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

  constructor(public authService: AuthService) {
    this.loadImageFromUrl(this.url);
  }



  onFileSelected(event: Event) {
    this.authService.selected_memes = '';
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.authService.imageBase64 = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }


  loadImageFromUrl(url: string) {
    // url = 'https://i.pinimg.com/236x/85/42/1d/85421d99a96b40388c70eea6a1af2d1f.jpg';
    this.authService.imageBase64 = '';
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // Pour éviter les problèmes CORS
  
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        this.authService.imageBase64 = canvas.toDataURL('image/png');
        console.log('this.authService.imageBase64 =', this.authService.imageBase64)
      }
    };
  
    img.onerror = (error) => {
      console.error('Erreur lors du chargement de l\'image :', error);
    };
  
    img.src = url;
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
              // this.checkConditionAndClose();
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
