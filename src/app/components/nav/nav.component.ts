import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent implements OnInit  {
  activeClass = 'border-b-2 border-b-blue-800 rounded-none text-blue-500'
  userEmail = ''
  constructor(private shared : SharedService){

  }

  ngOnInit(): void {
    this.getCurrentUser()    
  }

  getCurrentUser(){
    const userString = this.shared.getCookie('userInfo')
    const userInfo = JSON.parse(userString)
    console.log(userInfo)
    this.userEmail = userInfo.email
  }


  

}
