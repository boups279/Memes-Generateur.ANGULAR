import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-mimes',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './popular-mimes.component.html',
  styleUrl: './popular-mimes.component.scss'
})
export class PopularMimesComponent {
  memes: any[] = [];

  constructor(private  authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getMemes().subscribe(
      (data: any) => {
        this.memes = data;
        console.log('memes', this.memes);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des mèmes', error);
      }
    );
  }

  selectedMemes(meme: any){
    this.authService.selected_memes = 'http://127.0.0.1:8000'+meme;
    console.log('selected_memes',meme);
  }

}
