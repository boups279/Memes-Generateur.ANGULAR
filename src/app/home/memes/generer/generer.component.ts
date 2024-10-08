import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // Importation correcte
import html2canvas from 'html2canvas';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-generer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './generer.component.html',
  styleUrls: ['./generer.component.scss'] // Corriger "styleUrl" en "styleUrls"
})
export class GenererComponent {
  // @ViewChild('screenshotDiv') screenshotDiv: any;

  // constructor(private router: Router) {}

  // takeScreenshot() {
  //   html2canvas(this.screenshotDiv.nativeElement).then(canvas => {
  //     const link = document.createElement('a');
  //     link.href = canvas.toDataURL('image/png');
  //     link.download = 'screenshot.png';
  //     link.click();
  //   });
  // }

  screenshot: string | null = null;

  constructor(public  authService: AuthService) {

  }


  ngOnInit() {
    // S'abonner au service pour récupérer l'image
    this.authService.screenshot$.subscribe(image => {
      this.screenshot = image;
    });
  }

  downloadScreenshot() {
    if (this.screenshot) {
      const link = document.createElement('a');
      link.href = this.screenshot;
      link.download = 'screenshot.png';
      link.click();
    }
  }
}
