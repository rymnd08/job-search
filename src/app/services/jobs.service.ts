import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../assets/environment/environment';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

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

  createAccount(email: string, password: string){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
  
  login (email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  getCurrentUser(){
    return this.auth.currentUser
  }

  signOutUser(){
    return signOut(this.auth)// Promise
  }
  


}
