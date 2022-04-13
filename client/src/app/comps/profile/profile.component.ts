import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { StoreService } from 'src/app/service/store.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  constructor(private axiox : HttpServiceService, private store : StoreService, private http : HttpClient ) { }
  subProtect: Subscription = new Subscription()
  message! : String
  // @Output()
  // userID:EventEmitter<string> = new EventEmitter()
  sub: Subscription = new Subscription()
  mode: boolean = true
  userID: string = ""
  userBirthday : number = 0
  userName: string = ""
  userDepartment: string = ""
  userEmail: string = ""
  taskIDs : string[] = []
  postIDs : string[] = []



  ngOnInit(): void {


    this.subProtect = this.http.get<any>('http://localhost:4000/api/user/protected').subscribe(
      (response) => {
        if (response) {

          let localUserid = localStorage.getItem('userid')
          if(localUserid == null) { this.userID = '404_USERID'}
          else { this.userID = localUserid}
          this.store.currentMode$.subscribe((value) => { this.mode = value })

          this.sub = this.axiox.getData('http://localhost:4000/api/user/'+this.userID)
          .subscribe( (data : any) => {
            this.userName = data.Username
            this.userDepartment = data.department
            this.userEmail = data.email
            this.userBirthday = data.birthday
            this.taskIDs = data.tasks
            this.postIDs = data.posts

          })}

        },
        (error) => {
          if (error.status === 401) {
            this.message = 'You are not authorized to visit this route.  No data is displayed.';
          }

          console.log(error);
        },

        () => {
          console.log('HTTP request done');
        }
      );
      }





  }


