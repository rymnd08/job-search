import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { ActivatedRoute } from '@angular/router';
import { sampleData } from '../main/sampledata';
import { IJobs } from '../../services/Interface';

@Component({
  selector: 'app-view-job',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './view-job.component.html',
  styleUrl: './view-job.component.css'
})
export class ViewJobComponent implements OnInit {
  jobData! : IJobs 
  
  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    this.getParams()
  }

  getParams(){
    this.route.url.subscribe(url =>{
      const params = url[1].path
      const data = sampleData.filter(job =>{
        return job['id'] === params
      })
      this.jobData = data[0]
    })
  }

}
