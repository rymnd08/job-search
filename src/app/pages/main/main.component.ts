import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { SearchJobsComponent } from '../../components/search-jobs/search-jobs.component';
import { CardComponent } from '../../components/card/card.component';
import { sampleData } from './sampledata';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomDatePipePipe } from '../../services/custom-date-pipe.pipe';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavComponent, SearchJobsComponent, CardComponent, RouterModule, CustomDatePipePipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css', 
})
export class MainComponent implements OnInit {
  jobsData : any = signal([])

  constructor(public router: Router, public route: ActivatedRoute){}

  ngOnInit(): void {
    this.jobsData.set(sampleData)
  }

  navigate(id : string){
    this.router.navigate(['/main/' + id])
  }
  navigateTag(tag: string){
    this.router.navigate(['/main/' + tag])
  }

  searchValue(val: string){
    const regex = new RegExp(val, 'i')
    const filtered = sampleData.filter((obj: any) =>{
      return regex.test(obj['position']) || 
      regex.test(obj['company']) || 
      regex.test(obj['salary']) || 
      regex.test(obj['description']) || 
      regex.test(obj['tags']) || 
      regex.test(obj['location'])
    })
    this.jobsData.set(filtered)
  }
}
