import { Component, ViewChild } from '@angular/core';
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
import html2canvas from 'html2canvas';

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
    GenererComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  radioForm!: FormGroup;
  selectedOption: any;
  form: FormGroup;

  @ViewChild('elementToCapturerecto') elementToCapturerecto: any;
  @ViewChild('elementToCaptureverso') elementToCaptureverso: any;

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.form = this.fb.group({
      fields: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.selectedOption = 'populaire';
    this.radioForm = this.fb.group({
      option: ['populaire'],
    });

    this.radioForm.get('option')?.valueChanges.subscribe((value) => {
      this.selectedOption = value;
    });

    this.form.valueChanges.subscribe(() => {
      this.updateFieldData();
    });
  }

  fieldData: { index: number; value: string }[] = [];

  get fields(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  addField() {
    const field = this.fb.control('', Validators.required);
    this.fields.push(field);
    this.updateFieldData();
  }

  removeField(index: number) {
    this.fields.removeAt(index);
    this.updateFieldData();
  }

  updateFieldData() {
    this.fieldData = this.fields.controls.map((control, index) => ({
      index: index + 1,
      value: control.value,
    }));

    this.authService.les_texts = this.fieldData;
    console.log('this.authService.les_texts', this.authService.les_texts);
  }

  onSubmit() {
    console.log(this.form.value);
  }

  toggleItalic(index: number) {
    this.authService.fieldStyles[index] = {
      ...this.authService.fieldStyles[index],
      isItalic: !this.authService.fieldStyles[index]?.isItalic,
    };
  }

  toggleBold(index: number) {
    this.authService.fieldStyles[index] = {
      ...this.authService.fieldStyles[index],
      isBold: !this.authService.fieldStyles[index]?.isBold,
    };
  }

  increaseFontSize(index: number) {
    this.authService.fieldStyles[index] = {
      ...this.authService.fieldStyles[index],
      fontSize: (this.authService.fieldStyles[index]?.fontSize || 16) + 2,
    };
  }

  decreaseFontSize(index: number) {
    if (this.authService.fieldStyles[index]?.fontSize > 8) {
      this.authService.fieldStyles[index].fontSize -= 2;
    }
  }

  onColorChange(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    this.authService.fieldStyles[index] = {
      ...this.authService.fieldStyles[index],
      color: input.value,
    };
  }

  setRotateLeft(index: number) {
    this.authService.fieldStyles[index] = {
      ...this.authService.fieldStyles[index],
      rotation: (this.authService.fieldStyles[index]?.rotation || 0) - 15,
    };
  }

  setRotateRight(index: number) {
    this.authService.fieldStyles[index] = {
      ...this.authService.fieldStyles[index],
      rotation: (this.authService.fieldStyles[index]?.rotation || 0) + 15,
    };
  }

  toggleCase(index: number) {
    const control = this.fields.at(index);
    const currentValue = control.value;
    const newValue =
      currentValue.toUpperCase() === currentValue
        ? currentValue.toLowerCase()
        : currentValue.toUpperCase();
    control.setValue(newValue);
    this.updateFieldData();
  }
}
