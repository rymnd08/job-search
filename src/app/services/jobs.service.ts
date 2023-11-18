import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../assets/environment/environment';
import { GoogleAuthProvider, getAuth, signInWithPopup   } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})

export class JobsService {
  app = initializeApp(firebaseConfig)
  provider = new GoogleAuthProvider();
  auth = getAuth(this.app)
  constructor() { }

  googleSignIn(){
    return signInWithPopup(this.auth, this.provider)
  }
  


}
