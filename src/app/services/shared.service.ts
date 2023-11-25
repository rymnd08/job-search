import { Injectable, signal} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { userInfo } from './IuserInfo';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  searchVal = signal('')

  constructor(private cookie : CookieService) {}

  setCookie(key : string, value : string){
    this.cookie.set(key, value)
  }

  getCookie(key: string){
    return this.cookie.get(key)
  }

  deleteCookie(key: string){
    this.cookie.delete(key)
  }
  
  getuserLoginState(){
    if(this.cookie.get('userInfo')){
      return true
    }else{
      return false
    }
  }

  get getUserID(){
    try{
      const userInfo = JSON.parse(this.cookie.get('userInfo'))
      if(userInfo){
        return userInfo['uid']
      }
    }catch(err){
      // reject('Not login')
    }
  }

  getCurrentUser(){
    return new Promise<userInfo>((resolve, reject)=>{
      try{
        const userInfo = JSON.parse(this.cookie.get('userInfo'))
        if(userInfo){
          resolve(userInfo)
        }else{
          reject('Not login')
        }
      }catch(err){
        reject('Not login')
      }
    })
  }


}
