import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // currentMode : boolean = true
  private mode$ = new BehaviorSubject<boolean>(true);
  currentMode$ = this.mode$.asObservable()

  

  // private userid$ = new BehaviorSubject<string>('62376560612a0fbaeadca6b3');
  // currentuserid$ = this.userid$.asObservable()

  updateMode() 
  {
    let newValue =  !this.mode$.value
    this.mode$.next(newValue)
  }



  constructor() { }
}
