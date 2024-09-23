import { CommonModule, isPlatformBrowser } from '@angular/common'; // Importer isPlatformBrowser
import { Component, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-img-memes',
  standalone: true,
  imports: [RouterModule, CommonModule, CdkDrag, FormsModule, ReactiveFormsModule],
  templateUrl: './img-memes.component.html',
  styleUrls: ['./img-memes.component.scss']
})
export class ImgMemesComponent {

  constructor(private fb: FormBuilder, public authService: AuthService, @Inject(PLATFORM_ID) private platformId: any) { }

  @ViewChild('captureDiv') captureDiv: any;
  

  ngOnInit() {
    // Vérifie si l'application s'exécute dans le navigateur
    // if (isPlatformBrowser(this.platformId)) {
    //   // Charger dom-to-image dynamiquement
    //   import('dom-to-image').then(domtoimage => {
    //     this.domtoimage = domtoimage; // Sauvegarde de domtoimage pour une utilisation ultérieure
    //   });
    // }
  }

  // domtoimage: any; // Déclaration pour stocker domtoimage

  // capture() {
  //   const node = this.captureDiv.nativeElement;

  //   if (this.domtoimage) {
  //     this.domtoimage.toPng(node)
  //       .then((dataUrl: any) => {
  //         const link = document.createElement('a');
  //         link.href = dataUrl;
  //         link.download = 'capture.png';
  //         link.click();
  //       })
  //       .catch((error: any) => {
  //         console.error('Erreur lors de la capture d\'image :', error);
  //       });
  //   } else {
  //     console.error('dom-to-image n\'est pas encore chargé.');
  //   }
  // }

  // captureScreen() {
  //   const node = document.getElementById('screen-content');

  //   if (node) {
  //     toPng(node)
  //       .then((dataUrl) => {
  //         const img = new Image();
  //         img.src = dataUrl;
  //         document.body.appendChild(img);  // Affiche l'image capturée dans le DOM

  //         // Optionnel : Télécharger l'image capturée
  //         const link = document.createElement('a');
  //         link.download = 'capture.png';
  //         link.href = dataUrl;
  //         link.click();
  //       })
  //       .catch((error) => {
  //         console.error('Erreur lors de la capture de l\'écran :', error);
  //       });
  //   }
  // }
  // base64Image = '';
  
  //   captureScreen() {
  //     const node = document.getElementById('screen-content');
  //     if (node) {
  //       toPng(node)
  //         .then(dataUrl => {
  //           const img = new Image();
  //           img.src = dataUrl;
  //           document.body.appendChild(img);
  
  //           const link = document.createElement('a');
  //           link.download = 'capture.png';
  //           link.href = dataUrl;
  //           link.click();
  //         })
  //         .catch(error => {
  //           console.error('Erreur lors de la capture de l\'écran :', error);
  //         });
  //     }
  //   }



  loadImageFromUrl(url: string) {
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
      }
    };
    img.src = url;
  }
  

}
