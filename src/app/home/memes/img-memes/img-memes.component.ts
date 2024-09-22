import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { AuthService } from '../../../services/auth.service';
import {  FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptureModule, NgxCaptureService } from 'ngx-capture';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-img-memes',
  standalone: true,
  imports: [RouterModule, CommonModule, CdkDrag, FormsModule, ReactiveFormsModule,NgxCaptureModule],
  templateUrl: './img-memes.component.html',
  styleUrls: ['./img-memes.component.scss']
})
export class ImgMemesComponent {

  @ViewChild('elementToCapturerecto') elementToCapturerecto: any;
  @ViewChild('elementToCaptureverso') elementToCaptureverso: any;

  constructor(private fb: FormBuilder,public  authService: AuthService, private captureService: NgxCaptureService) {

  }


  takeScreenshot() {
    const element = this.elementToCapturerecto.nativeElement;
    html2canvas(element).then((canvas: any) => {
      const screenshot = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = screenshot;
      a.download = 'this.content.prenom' + '_qrcode.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });

    const element2 = this.elementToCaptureverso.nativeElement;
    html2canvas(element2).then((canvas: any) => {
      const screenshot = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = screenshot;
      a.download = 'this.content.prenom' + '_qrcode.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
  
}
