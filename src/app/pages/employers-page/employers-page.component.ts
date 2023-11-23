import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavEmployerComponent } from '../../components/nav-employer/nav-employer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employers-page',
  standalone: true,
  imports: [CommonModule, NavEmployerComponent, RouterModule],
  templateUrl: './employers-page.component.html',
  styleUrl: './employers-page.component.css'
})
export class EmployersPageComponent  {

}
