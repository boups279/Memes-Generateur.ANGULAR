import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemesComponent } from './add-memes.component';

describe('AddMemesComponent', () => {
  let component: AddMemesComponent;
  let fixture: ComponentFixture<AddMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
