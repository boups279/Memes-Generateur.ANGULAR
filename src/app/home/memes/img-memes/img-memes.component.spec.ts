import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgMemesComponent } from './img-memes.component';

describe('ImgMemesComponent', () => {
  let component: ImgMemesComponent;
  let fixture: ComponentFixture<ImgMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgMemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
