import { Component, OnInit, Signal, signal } from '@angular/core';
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
  userEmail  = signal('')
  isUserLogin  = signal(false)

  constructor(private shared : SharedService){}
  ngOnInit(): void {
    this.getCurrentUser()
  }

  logOut(){
    this.shared.deleteCookie('userInfo')
    this.userEmail.set('')
    this.isUserLogin  = signal(false)
  }

  getCurrentUser(){
    try{
      const userInfo = JSON.parse(this.shared.getCookie('userInfo'))
      if(userInfo){
        this.isUserLogin.set(true)
        this.userEmail.set(userInfo.email)
      }
    }catch(err){}
  }

}
