import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { SearchJobsComponent } from '../../components/search-jobs/search-jobs.component';
import { CardComponent } from '../../components/card/card.component';
import { sampleData } from './sampledata';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomDatePipePipe } from '../../services/custom-date-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { IJobs } from '../../services/Interface';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavComponent, SearchJobsComponent, CardComponent, RouterModule, CustomDatePipePipe, FormsModule, ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css', 
})

export class MainComponent implements OnInit {
  sampleData = sampleData
  jobsData : WritableSignal<IJobs[]> = signal([])
  paginateData : IJobs[] = []
  itemsPerPage = 4
  page = 0
  totalPage = 0
  constructor(public router: Router, public route: ActivatedRoute){}

  ngOnInit(): void {
    const arr = this.paginate(this.sampleData, this.itemsPerPage)
    this.jobsData.set(arr[this.page])
    this.totalPage = Math.ceil(this.sampleData.length / this.itemsPerPage)
  }

  prevPage(){
    if(this.page === 0) return 

    const arr = this.paginate(this.sampleData, this.itemsPerPage)
    console.log(arr[0])
    this.page = this.page - 1 
    this.jobsData.set(arr[this.page])
  }

  nextPage(){
    if(this.page+1 === this.totalPage) return

    const arr = this.paginate(this.sampleData, this.itemsPerPage)
    this.page = this.page + 1
    this.jobsData.set(arr[this.page])
  }


  navigate(route: string, param : string){
    this.router.navigate([`/${route}/` + param])
  }
  searchValue(val: string){
    const regex = new RegExp(val, 'i')
    const filtered = this.sampleData.filter((obj: IJobs) =>{
      return regex.test(obj['title']) || 
      regex.test(obj['company']) || 
      regex.test(obj['salary']) || 
      regex.test(obj['description']) || 
      regex.test(obj['tags'].toString()) || 
      regex.test(obj['location'])
    })

  }
  paginate(arr: IJobs[], numOfPages: number){
    const pages = numOfPages
    const pagesArr = []
    for(let x = 0; x < arr.length; x+= Math.ceil(pages)){
        const subArr = arr.slice(x, (x+Math.ceil(pages)))
        pagesArr.push(subArr)
    }
    return pagesArr
  }
}
