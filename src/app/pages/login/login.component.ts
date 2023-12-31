import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JobsService } from '../../services/jobs.service';
import { SharedService } from '../../services/shared.service';

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
  alertMessage = ''
  alertColor = ''

  constructor(private fb : FormBuilder, private jobFb : JobsService, private router: Router, private shared : SharedService){}

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

        this.LoginForm.reset()
        this.shared.setCookie('userInfo', JSON.stringify(userInfo))

        this.alert = true
        this.alertMessage = 'Login Successfully'
        this.alertColor = 'bg-slate-300'

        setTimeout(()=> this.router.navigate(['/main']), 2000)

      })
      .catch(err =>{
        this.alert = true
        this.alertColor = 'bg-rose-300'
        this.alertMessage = err.code
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

      const userInfo = {
        uid : user.uid,
        email : user.email,
        displayName : user.displayName,
        emailVerified : user.emailVerified,
        photoURL : user.photoURL,
        phoneNumber : user.phoneNumber,
      }
      
      this.LoginForm.reset()
      this.shared.setCookie('userInfo', JSON.stringify(userInfo))

      this.alert = true
      this.alertMessage = 'Login Successfully'
      this.alertColor = 'bg-slate-300'

      setTimeout(()=> this.router.navigate(['/main']), 2000)

    }).catch((err) => {
      this.alert = true
      this.alertColor = 'bg-rose-300'
      this.alertMessage = err.code
    });
  }
  
}
