import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenererComponent } from './generer.component';

describe('GenererComponent', () => {
  let component: GenererComponent;
  let fixture: ComponentFixture<GenererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
