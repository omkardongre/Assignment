import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question4ChildComponent } from './question4-child.component';

describe('Question4ChildComponent', () => {
  let component: Question4ChildComponent;
  let fixture: ComponentFixture<Question4ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Question4ChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Question4ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
