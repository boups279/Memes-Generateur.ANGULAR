import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonMemesComponent } from './mon-memes.component';

describe('MonMemesComponent', () => {
  let component: MonMemesComponent;
  let fixture: ComponentFixture<MonMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonMemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
