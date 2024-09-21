import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMimesComponent } from './popular-mimes.component';

describe('PopularMimesComponent', () => {
  let component: PopularMimesComponent;
  let fixture: ComponentFixture<PopularMimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularMimesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularMimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
