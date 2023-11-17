import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isCheck = false
  LoginForm! : FormGroup
  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email : ['',[Validators.email, Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  formSubmit(){
    console.log(this.LoginForm.value)
    this.LoginForm.reset()
  }

  get email(){
    return this.LoginForm.get('email')
  }
  get password(){
    return this.LoginForm.get('password')
  }
  
}
