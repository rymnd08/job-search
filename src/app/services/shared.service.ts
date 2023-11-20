import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  userInfo : any
  private session = sessionStorage

  constructor() {}

  setSession(key : string, value : string){
    this.session.setItem(key, value)
  }

  getSession(key: string){
    return this.session.getItem(key)
  }

}
