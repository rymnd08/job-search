import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersPageComponent } from './employers-page.component';

describe('EmployersPageComponent', () => {
  let component: EmployersPageComponent;
  let fixture: ComponentFixture<EmployersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
