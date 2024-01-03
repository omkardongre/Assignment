import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousFirstAppComponent } from './marvellous-first-app.component';

describe('MarvellousFirstAppComponent', () => {
  let component: MarvellousFirstAppComponent;
  let fixture: ComponentFixture<MarvellousFirstAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvellousFirstAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarvellousFirstAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
