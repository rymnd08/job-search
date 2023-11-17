import { Injectable, inject } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../assets/environment/environment';
import { GoogleAuthProvider, getAuth, signInWithPopup   } from "firebase/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  app = initializeApp(firebaseConfig)
  provider = new GoogleAuthProvider();
  auth = getAuth(this.app)
  constructor() { }

  googleSignIn(){
    const router = inject(Router)
    signInWithPopup(this.auth, this.provider)
    .then((result) => {
      router.navigate(['/main'])
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      console.log(user)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorMessage, errorCode)
    });
  }


}
