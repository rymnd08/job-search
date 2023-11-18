import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { ActivatedRoute } from '@angular/router';
import { sampleData } from '../../pages/main/sampledata';

@Component({
  selector: 'app-view-job',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './view-job.component.html',
  styleUrl: './view-job.component.css'
})
export class ViewJobComponent implements OnInit {

  jobData : any

  route = inject(ActivatedRoute)

  ngOnInit(): void {

    this.getParams()
  }

  getParams(){
    let params = ''

    this.route.url.subscribe(url =>{
      console.log(url[1].path)
      params = url[1].path
    })

    const data = sampleData.filter(job =>{
      return job['id'] === params
    })

    this.jobData = data[0]
  }
}
