import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
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

  //pagination controls
  paginateData : any
  itemsPerPage = 6
  page = 0
  totalPage = 0
  jobResults? : number

  constructor(public router: Router, public route: ActivatedRoute){}

  ngOnInit(): void {
    this.paginateData = this.paginate(this.sampleData, this.itemsPerPage)
    this.jobsData.set(this.paginateData[this.page])
    this.totalPage = Math.ceil(this.sampleData.length / this.itemsPerPage)
  }

  prevPage(){
    if(this.page === 0) return 

    this.page = this.page - 1 
    this.jobsData.set(this.paginateData[this.page])
  }

  nextPage(){
    if(this.page+1 === this.totalPage) return

    this.page = this.page + 1
    this.jobsData.set(this.paginateData[this.page])
  }


  navigate(route: string, param : string){
    this.router.navigate([`/${route}/` + param])
  }

  handleSearch(val: string){
    this.page = 0
    const regex = new RegExp(val, 'i')

    if(val === ''){
      console.log('empty')

      this.paginateData = this.paginate(this.sampleData, this.itemsPerPage)
      this.jobsData.set(this.paginateData[this.page])
      this.totalPage = Math.ceil(this.sampleData.length / this.itemsPerPage)
    }
    else{
        const  filtered =  this.sampleData.filter((obj: IJobs) =>{
        return regex.test(obj['title']) || 
        regex.test(obj['company']) || 
        regex.test(obj['salary']) || 
        regex.test(obj['description']) || 
        regex.test(obj['tags'].toString()) || 
        regex.test(obj['location'])
      })

      this.paginateData = this.paginate(filtered, this.itemsPerPage)
      this.jobsData.set(this.paginateData[this.page])
      this.totalPage = Math.ceil(filtered.length / this.itemsPerPage)
    }
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
