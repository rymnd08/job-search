import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipe',
  standalone: true
})
export class CustomDatePipePipe implements PipeTransform {

  transform(value: unknown){
    if(this.daysPassed(value) < 1){
      return `Posted today`
    }
    else if(this.daysPassed(value) == 1){
      return `Posted ${this.daysPassed(value)}day ago`
    }
    else{
      return `Posted ${this.daysPassed(value)}days ago`
    }
  }

  daysPassed(startDate: any) {
    // Convert the input string to a Date object
    const start = new Date(startDate);
    const end = new Date(); // Current date
  
    // Calculate the time difference in milliseconds
    const timeDifference = end.getTime() - start.getTime();
  
    // Calculate the number of days
    const daysDifference = timeDifference / (1000 * 3600 * 24);
  
    return Math.floor(daysDifference);
  }

}
