import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddMemesComponent } from '../memes/add-memes/add-memes.component';
import { PopularMimesComponent } from '../memes/popular-mimes/popular-mimes.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MonMemesComponent } from '../memes/mon-memes/mon-memes.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ImgMemesComponent } from '../memes/img-memes/img-memes.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, AddMemesComponent, PopularMimesComponent, ReactiveFormsModule, MonMemesComponent, CommonModule, ImgMemesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  radioForm!: FormGroup;
  selectedOption: any;

  constructor(private fb: FormBuilder, public  authService: AuthService) {}

  ngOnInit(): void {
    this.selectedOption = 'mon'
    // Initialisation du formulaire
    this.radioForm = this.fb.group({
      option: ['mon'] // Valeur par défaut
    });

    // Écouter les changements de valeur
    this.radioForm.get('option')?.valueChanges.subscribe(value => {
      this.selectedOption = value;
    });
  }


  
}
