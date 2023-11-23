import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { JobsService } from '../../services/jobs.service';

type Jobs = {
  title: string,
  addedAt: number,
  uid: string,
  skills: string[]
}

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {

  ngOnInit(): void {  
    
  }



}
