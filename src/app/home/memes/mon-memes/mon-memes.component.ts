import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-mon-memes',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './mon-memes.component.html',
  styleUrl: './mon-memes.component.scss'
})
export class MonMemesComponent {
  captures: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCaptures().subscribe(
      (data) => {
        this.captures = data;
        console.log('Captures récupérées :', this.captures);
      },
      (error) => {
        console.error('Erreur lors de la récupération des captures :', error);
      }
    );
  }

  loadImageFromUrl(url: string) {
    console.error('url captures :', url);

  }
}
