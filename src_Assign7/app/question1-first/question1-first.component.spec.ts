import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1FirstComponent } from './question1-first.component';

describe('Question1FirstComponent', () => {
  let component: Question1FirstComponent;
  let fixture: ComponentFixture<Question1FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question1FirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Question1FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
