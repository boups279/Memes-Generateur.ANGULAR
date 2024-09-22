import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddMemesComponent } from '../memes/add-memes/add-memes.component';
import { PopularMimesComponent } from '../memes/popular-mimes/popular-mimes.component';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MonMemesComponent } from '../memes/mon-memes/mon-memes.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ImgMemesComponent } from '../memes/img-memes/img-memes.component';
import { GenererComponent } from '../memes/generer/generer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    AddMemesComponent,
    PopularMimesComponent,
    ReactiveFormsModule,
    MonMemesComponent,
    CommonModule,
    ImgMemesComponent,
    GenererComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  radioForm!: FormGroup;
  selectedOption: any;
  form: FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService) {
    // this.form = this.fb.group({
    //   inputs: this.fb.array([]),
    // });

    // console.log(this.form);

    this.form = this.fb.group({
      inputs: this.fb.array([this.createInput()]),
    });
  }

  ngOnInit(): void {
    this.selectedOption = 'mon';
    // Initialisation du formulaire
    this.radioForm = this.fb.group({
      option: ['mon'], // Valeur par défaut
    });

    // Écouter les changements de valeur
    this.radioForm.get('option')?.valueChanges.subscribe((value) => {
      this.selectedOption = value;
    });
  }

  get inputs(): FormArray {
    const texte = this.form.get('inputs') as FormArray;
    this.authService.le_texte = texte.value[0];
    this.authService.le_texte = texte?.value[0]?.value;
    console.log(this.authService.le_texte);
    return this.form.get('inputs') as FormArray;
  }

  createInput(): FormGroup {
    return this.fb.group({
      value: [''],
    });
  }

  addInput(): void {
    this.inputs.push(this.createInput());
  }

  removeInput(index: number): void {
    this.inputs.removeAt(index);
  }

  // get inputs(): FormArray {
  //   const texte = this.form.get('inputs') as FormArray
  //   // this.authService.le_texte = texte.value[0];
  //   this.authService.le_texte = texte?.value[0]?.value;
  //   console.log(this.authService.le_texte);
  //   return this.form.get('inputs') as FormArray;
  // }

  // addInput(): void {
  //   const inputGroup = this.fb.group({
  //     value: ['', Validators.required] // Ajout d'un champ 'value'
  //   });
  //   this.inputs.push(inputGroup); // Ajout d'un nouvel input
  // }

  // removeInput(index: number): void {
  //   this.inputs.removeAt(index); // Supprimer l'input à l'index donné
  // }

  toggleItalic() {
    this.authService.isItalic = !this.authService.isItalic;
  }

  toggleBold() {
    this.authService.isBold = !this.authService.isBold;
  }

  increaseFontSize() {
    this.authService.fontSize += 2;
  }

  decreaseFontSize() {
    if (this.authService.fontSize > 8) {
      this.authService.fontSize -= 2;
    }
  }

  onColorChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.authService.textColor = input.value;
  }

  setUppercase() {
    this.authService.textTransform = 'uppercase';
  }

  setLowercase() {
    this.authService.textTransform = 'lowercase';
  }

  resetTransform() {
    this.authService.textTransform = 'none';
  }

}
