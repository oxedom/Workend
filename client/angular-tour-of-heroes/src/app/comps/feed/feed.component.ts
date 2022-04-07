import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { PostComponent } from '../post/post.component';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postIDs : Array<string> = []

  constructor(private logic: HttpServiceService) { }

  ngOnInit(): void {
    this.logic.getData('http://localhost:8000/api/user/posts').subscribe( (data : any) => {
     let newData =  data.map( (post: any) => { return post._id } )
    this.postIDs = newData
    console.log(this.postIDs)
    })
  }

}
