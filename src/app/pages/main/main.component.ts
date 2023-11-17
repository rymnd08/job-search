import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  currentPath : string | undefined
  
  constructor(private route : ActivatedRoute){}
  ngOnInit(): void {


  }
}
