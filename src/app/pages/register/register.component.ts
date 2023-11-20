import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isCheck = false
  RegForm! : FormGroup
  alert = false
  alertColor = 'bg-slate-300'
  alertMessage = ''

  constructor(private fb : FormBuilder, private jobFb : JobsService, private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.RegForm = this.fb.group({
      email : ['',[Validators.email, Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
    })
    // this.route.url.subscribe(url => console.log(url[0].path))
  }

  formSubmit(){
    this.jobFb.createAccount(this.email?.value, this.password?.value)
      .then(user =>{
        this.RegForm.reset()
        this.alert = true
        this.alertMessage = 'Account created successfully'
        this.alertColor = 'bg-slate-300'
        setTimeout(()=>{
          this.router.navigate(['/login'])
        },2500)
      })
      .catch(error => {
        console.log(error.code)
        this.alert = true
        this.alertColor = 'bg-rose-300'
        this.alertMessage = error.code
      })

  }

  get email(){
    return this.RegForm.get('email')
  }
  get password(){
    return this.RegForm.get('password')
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
