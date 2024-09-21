import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mon-memes',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './mon-memes.component.html',
  styleUrl: './mon-memes.component.scss'
})
export class MonMemesComponent {

}
