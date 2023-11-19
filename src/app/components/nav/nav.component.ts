import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  activeClass = 'border-b-2 border-b-blue-800 rounded-none text-blue-500'
  userEmail?: string
  ngOnInit(): void {
    const user = JSON.parse(window.sessionStorage.getItem('userInfo')!)
  }
}
