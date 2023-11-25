import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

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
