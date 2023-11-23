import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEmployerComponent } from './nav-employer.component';

describe('NavEmployerComponent', () => {
  let component: NavEmployerComponent;
  let fixture: ComponentFixture<NavEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavEmployerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
