import { Component, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-jobs.component.html',
  styleUrl: './search-jobs.component.css'
})
export class SearchJobsComponent {
  @Output() searchVal = new EventEmitter<string>()

  handleClick(val: string){
    this.searchVal.emit(val)
  }
}
