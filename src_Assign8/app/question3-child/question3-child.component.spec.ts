import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3ChildComponent } from './question3-child.component';

describe('Question3ChildComponent', () => {
  let component: Question3ChildComponent;
  let fixture: ComponentFixture<Question3ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question3ChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Question3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
