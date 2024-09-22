import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { AuthService } from '../../../services/auth.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-img-memes',
  standalone: true,
  imports: [RouterModule, CommonModule, CdkDrag, FormsModule, ReactiveFormsModule],
  templateUrl: './img-memes.component.html',
  styleUrls: ['./img-memes.component.scss']
})
export class ImgMemesComponent {
  isItalic = false;
  isBold = false;
  textColor = '#000000'; // Couleur par défaut en hexadécimal
  fontSize = 16; // Taille de police par défaut

  form: FormGroup;

  constructor(private fb: FormBuilder,public  authService: AuthService) {
    this.form = this.fb.group({
      inputs: this.fb.array([])
    });
  }

  get inputs(): FormArray {
    return this.form.get('inputs') as FormArray;
  }

  addInput() {
    const inputGroup = this.fb.group({
      value: ['']
    });
    this.inputs.push(inputGroup);
  }

  removeInput(index: number) {
    this.inputs.removeAt(index);
  }

  toggleItalic() {
    this.isItalic = !this.isItalic;
  }

  toggleBold() {
    this.isBold = !this.isBold;
  }

  increaseFontSize() {
    this.fontSize += 2; // Augmente la taille de police de 2px
  }

  decreaseFontSize() {
    if (this.fontSize > 8) { // Évite que la taille de police ne soit trop petite
      this.fontSize -= 2; // Diminue la taille de police de 2px
    }
  }

  onColorChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.textColor = input.value; // Met à jour la couleur du texte
  }
}
