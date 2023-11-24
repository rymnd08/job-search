import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';
import { sampleData } from '../main/sampledata';
import { IJobs } from '../../services/Interface';
import { NavComponent } from '../../components/nav/nav.component';
import { CardComponent } from '../../components/card/card.component';
import { CustomDatePipePipe } from '../../services/custom-date-pipe.pipe';

@Component({
  selector: 'app-view-tag',
  standalone: true,
  imports: [CommonModule, NavComponent, CardComponent, CustomDatePipePipe ],
  templateUrl: './view-tag.component.html',
  styleUrl: './view-tag.component.css'
})

export class ViewTagComponent extends MainComponent implements OnInit {

  params? : string
  data : IJobs[] = []

  override ngOnInit(): void {
    const params = this.route.snapshot.params['tag']
    this.params = params
    const filtered = sampleData.filter((job: IJobs) => {
      return job['tags'].includes(params) || job['salary'] == params
    });
    this.data = [...filtered]
  }


  

}
