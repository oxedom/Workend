import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { StoreService } from 'src/app/service/store.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  constructor(private axiox: HttpServiceService, private store: StoreService, private http: HttpClient) { }

  subProtect: Subscription = new Subscription()
  message!: String
  // @Output()
  // userID:EventEmitter<string> = new EventEmitter()
  // This.subProtect is getting the User ID


  sub: Subscription = new Subscription()

  profile :  Profile = {
    fname: '',
    birthday: '',
    username: '',
    lname: '',
    department: '',
    email: '',
    tasks: [],
    posts: [],
    userid: '',
    getAge: function (): void {
      throw new Error('Function not implemented.');
    }
  }
  mode: boolean = true
  userID: string = ""

  subEdit: Subscription = new Subscription()
  notValid: boolean = false
  isShow = false;


  toggleDisplay() {

    this.isShow = !this.isShow
  };

  editProfile()
  {
      let obj = {

        Username: this.profile.username ,
        department : this.profile.department,
        email : this.profile.email,
        birthday :this.profile.birthday
      }
      console.log(obj)
      this.axiox.updateUser(this.userID,obj).subscribe(()=>{})
      this.isShow = !this.isShow
      };




    ngOnInit(): void {
      let localUserid = localStorage.getItem('userid')
      //Protect the route with jwt.
      // If the User is authorized our server is asking for the jwt and return it with the user ID.
      this.subProtect = this.http.get<any>('http://localhost:4000/api/user/').subscribe({
          next : (response : any) => {console.log(response)},
          error : (error : any) => {(error.status === 401)
          { this.message = 'You are not authorized to visit this route.  No data is displayed.' }
            console.log(error
            )},
          complete : () => {console.log('HTTP request done')}
        });
 
      if (localUserid == null) { this.profile.userid = '404_USERID' }
      else { this.userID = localUserid }

      //Workend Mode post / task
      this.store.currentMode$.subscribe((value) => { this.mode = value })

      // get the user data
      this.sub = this.axiox.getData(this.userID)
        .subscribe((data: any) => { this.profile = data




        })


    }


    ngOnDestroy(): void{
      this.subProtect.unsubscribe()
      this.sub.unsubscribe()
    }
  }
