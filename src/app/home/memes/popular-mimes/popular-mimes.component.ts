import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-popular-mimes',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './popular-mimes.component.html',
  styleUrl: './popular-mimes.component.scss',
})
export class PopularMimesComponent {
  memes: any[] = [];

  img_populaire = [
    { id: 0, images: './assets/meme1.png' },
    { id: 1, images: './assets/meme2.png' },
    { id: 2, images: './assets/meme3.png' },
    { id: 3, images: './assets/meme4.png' },
    { id: 4, images: './assets/meme5.png' },
    { id: 5, images: './assets/meme6.png' },
    { id: 6, images: './assets/meme7.png' },
    { id: 7, images: './assets/meme8.png' },
    { id: 8, images: './assets/meme9.png' },
    { id: 9, images: './assets/meme10.png' },
    { id: 10, images: './assets/meme11.png' },
    { id: 11, images: './assets/meme12.png' },
    { id: 12, images: './assets/meme13.png' },
    { id: 13, images: './assets/meme14.png' },
    { id: 14, images: './assets/meme15.png' },
    { id: 15, images: './assets/meme16.png' },
    { id: 16, images: './assets/meme17.png' },
    { id: 17, images: './assets/meme18.png' },
    { id: 18, images: './assets/meme19.png' },
    { id: 19, images: './assets/meme20.png' },
    { id: 20, images: './assets/meme21.png' },
    { id: 21, images: './assets/meme22.png' },
    { id: 22, images: './assets/meme23.png' },
    { id: 23, images: './assets/meme24.png' },
    { id: 24, images: './assets/meme25.png' },
    { id: 25, images: './assets/meme26.png' },
    { id: 26, images: './assets/meme27.png' },
  ];

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {}

  loadImageFromUrl(url: any) {
    console.log('url', url);
    this.authService.selected_memes = url
  }
}
