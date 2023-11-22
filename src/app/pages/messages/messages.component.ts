import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
  
  data = signal([])

  fb = inject(JobsService)

  ngOnInit(): void {  
    this.fb.getCollection("jobs")
      .then(res => {
        
      })
  }

}
