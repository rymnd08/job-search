import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  isCheck = false
  LoginForm! : FormGroup
  constructor(private fb : FormBuilder, private jobFb : JobsService, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email : ['',[Validators.email, Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
    })
    this.route.url.subscribe(url => console.log(url[0].path))

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

  loginUsingGoogle(){
    this.jobFb.googleSignIn()
    .then((result) => {
      const user = result.user;
      console.log(user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode)
    });
  }
  
}
