import { Component, Input, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { StoreService } from 'src/app/service/store.service';
import { TaskComponent } from '../task/task.component';
import { PostComponent } from '../post/post.component';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  taskSub : Subscription = new Subscription()
  postSub: Subscription = new Subscription()
  postIDs : Array<string> = []
  taskIDs : Array<string> = []
  @Input()
  mode: boolean = true

  constructor(private logic: HttpServiceService, private store : StoreService) { }

  ngOnInit(): void {

    this.store.currentMode$.subscribe((value) => {
      this.mode = value
    })


    this.postSub = this.logic.getData('http://localhost:4000/api/user/posts').subscribe( (data : any) => {
     let newData =  data.map( (post: any) => { return post._id } )
    this.postIDs = newData
    console.log(this.postIDs)
    })

    this.taskSub =  this.logic.getData('http://localhost:4000/api/user/tasks').subscribe( (data : any) => {
      let newData =  data.map( (post: any) => { return post._id } )
     this.taskIDs = newData
     console.log(this.taskIDs)
     })
   }


  ngOnDestory() 
  {
    this.postSub
    this.taskSub
  }
}
