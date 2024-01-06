import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1ChildComponent } from './question1-child.component';

describe('Question1ChildComponent', () => {
  let component: Question1ChildComponent;
  let fixture: ComponentFixture<Question1ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question1ChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Question1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
