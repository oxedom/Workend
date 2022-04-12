import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(private axiox : HttpServiceService, private store : StoreService) { }

  // @Output() 
  // userID:EventEmitter<string> = new EventEmitter()

  sub: Subscription = new Subscription()
  mode: boolean = true
  userID: string = ""
  userName: string = ""
  userDepartment: string = ""
  userEmail: string = ""
  taskIDs : string[] = []
  postIDs : string[] = []


  ngOnInit(): void {
    
    let localUserid = localStorage.getItem('userid')
    if(localUserid == null) { this.userID = '404_USERID'}
    else { this.userID = localUserid}

    this.store.currentMode$.subscribe((value) => { this.mode = value })

    this.sub = this.axiox.getData('http://localhost:4000/api/user/'+this.userID)
    .subscribe( (data : any) => {
      this.userName = `${data.fname} ${data.lname}`
      this.userDepartment = data.department
      this.userEmail = data.email
      this.taskIDs = data.tasks
      this.postIDs = data.posts 

    })


  }

}
