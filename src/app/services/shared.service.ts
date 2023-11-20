import { Injectable} from '@angular/core';
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


}
