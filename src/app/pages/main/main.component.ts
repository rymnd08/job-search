import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { SearchJobsComponent } from '../../components/search-jobs/search-jobs.component';
import { CardComponent } from '../../components/card/card.component';
import { sampleData } from './sampledata';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavComponent, SearchJobsComponent, CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css', 
})
export class MainComponent implements OnInit {
  jobsData : any = signal([])

  constructor(){}
  ngOnInit(): void {
    this.jobsData.set(sampleData)
  }

  searchValue(val: string){
    const regex = new RegExp(val, 'i')
    const filtered = sampleData.filter((obj: any) =>{
      return regex.test(obj['position']) || regex.test(obj['company']) || regex.test(obj['salary']) || regex.test(obj['description']) || regex.test(obj['tags']) 
    })
    this.jobsData.set(filtered)
  }
}
