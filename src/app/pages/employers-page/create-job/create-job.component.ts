import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavEmployerComponent } from '../../../components/nav-employer/nav-employer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [CommonModule, NavEmployerComponent, ReactiveFormsModule],
  templateUrl: './create-job.component.html',
  styleUrl: './create-job.component.css'
})

export class CreateJobComponent implements OnInit{
  tags : string[] = []
  CreateJobForm! : FormGroup

  constructor(private fb: FormBuilder){}


  addTag(inputEl : HTMLInputElement){
    if(!inputEl.value || this.tags.length === 5) return
    // this.tags.set([...this.tags(),inputEl.value])
    this.tags.push(inputEl.value)
    inputEl.value = ''
  }
  removeTag(tag:string){
    const filtered = this.tags.filter(tagList =>{
        return tagList != tag
    })
    this.tags = [...filtered]
  }


  ngOnInit(): void {
    this.CreateJobForm = this.fb.group({
      title: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      tags: [this.tags],
      description: ['', [Validators.required]],
    })
    console.log(this.CreateJobForm.value)
  }
  handleSubmit(){
    console.log(this.CreateJobForm.value)
  }

}
