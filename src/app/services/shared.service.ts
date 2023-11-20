import { Injectable, signal} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

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
    try{
      const userInfo  = JSON.parse(this.cookie.get('userInfo'))
      return userInfo ? true : false
    }catch(err){
      return false
    }
  }


}
