import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1SecondComponent } from './question1-second.component';

describe('Question1SecondComponent', () => {
  let component: Question1SecondComponent;
  let fixture: ComponentFixture<Question1SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question1SecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Question1SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
