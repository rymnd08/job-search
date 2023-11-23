import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-nav-employer',
  standalone: true,
  imports: [CommonModule, RouterModule, ],
  templateUrl: './nav-employer.component.html',
  styleUrl: './nav-employer.component.css'
})
export class NavEmployerComponent extends NavComponent {
  // override ngOnInit(): void {
      
  // }
}
