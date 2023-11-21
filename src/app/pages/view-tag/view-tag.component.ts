import { Component, OnInit, inject , signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { NavComponent } from '../../components/nav/nav.component';
import { SearchJobsComponent } from '../../components/search-jobs/search-jobs.component';
import { CardComponent } from '../../components/card/card.component';
import { CustomDatePipePipe } from '../../services/custom-date-pipe.pipe';
import { MainComponent } from '../main/main.component';
import { sampleData } from '../main/sampledata';

@Component({
  selector: 'app-view-tag',
  standalone: true,
  imports: [CommonModule, NavComponent, SearchJobsComponent, CardComponent, RouterModule, CustomDatePipePipe],
  templateUrl: './view-tag.component.html',
  styleUrl: './view-tag.component.css'
})

export class ViewTagComponent extends MainComponent implements OnInit {
  params? : string
  jobs: any = signal([])
  
  override ngOnInit(): void {
    const params = this.route.snapshot.params['tag']
    this.params = params
    this.jobs.set(sampleData)
    const data = this.jobs()
    const filtered = data.filter((job: any) => {
      return job['tags'].includes(params) || job['salary'] == params
    });
    this.jobs.set(filtered)
  }

}
