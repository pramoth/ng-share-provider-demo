import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  public msg:string
  constructor() {
    this.msg = 'AdminServiceService create at :'+new Date()
    console.log(this.msg)
   }
}
