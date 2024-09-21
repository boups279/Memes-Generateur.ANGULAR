import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-img-memes',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './img-memes.component.html',
  styleUrls: ['./img-memes.component.scss']
})
export class ImgMemesComponent {
  // // http://127.0.0.1:8000/storage/images/Pjf1TO6YKGDUaKTuTOEDYoxsbSvmh2pujYGsVBD2.png

}
