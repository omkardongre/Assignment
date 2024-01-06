import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2ChildComponent } from './question2-child.component';

describe('Question2ChildComponent', () => {
  let component: Question2ChildComponent;
  let fixture: ComponentFixture<Question2ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question2ChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Question2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
