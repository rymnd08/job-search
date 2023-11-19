import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
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
  alert = false
  alertMsg = ''

  constructor(private fb : FormBuilder, private jobFb : JobsService, private router: Router){}

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email : ['',[Validators.email, Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
    })
    // this.route.url.subscribe(url => console.log(url[0].path))
  }

  formSubmit(){
    this.jobFb.login(this.email?.value, this.password?.value)
      .then(userCred =>{
        const user = userCred.user

        const userInfo = {
          uid : user.uid,
          email : user.email,
          displayName : user.displayName,
          emailVerified : user.emailVerified,
          photoURL : user.photoURL,
          phoneNumber : user.phoneNumber,
        }

        window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
        this.LoginForm.reset()

        setTimeout(()=>{
          this.router.navigate(['/main'])
        },1000)
      })
      .catch(err =>{
        console.log(err.message)
        console.log(err.code)
      })
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
