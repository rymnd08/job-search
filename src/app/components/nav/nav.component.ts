import { Component, OnInit, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})


export class NavComponent implements OnInit  {
  showDropdown = false
  activeClass = 'border-b-2 border-b-blue-800 rounded-none text-blue-500'
  userEmail  = signal('')
  isUserLogin  = signal(false)

  constructor(private shared : SharedService, private router: Router){}
  ngOnInit(): void {
    this.getCurrentUser()
  }

  logOut(){
    this.shared.deleteCookie('userInfo')
    this.userEmail.set('')
    this.isUserLogin  = signal(false)
    this.router.navigate(['/main'])
    this.showDropdown = false
  }

  getCurrentUser(){
    this.shared.getCurrentUser()
      .then((res) =>{
        this.isUserLogin.set(true)
        this.userEmail.set(res.email)
      })
      .catch(err =>{})
  }

}
