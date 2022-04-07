import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { HttpServiceService } from 'src/app/service/http-service.service';

@Component({
  selector: 'app-post[postID]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  constructor(private axios: HttpServiceService) 
  {
    
 }

 //POST COMP:
 //Needs to recevice a POST ID to render itself (otherwise it will throw an error)
 //Post ID is recived from Fathercomp 

  sub: any = ""
  

  @Input()  
  postID: string = ''

  postText : string = ""
  postUserID: string = ""
  postDate: string = ""
  
  apiUrl: string = `http://localhost:8000/api/user/posts/`

 unixToDate(unixTime: string) 
 {
  var date = new Date(parseInt(unixTime) * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
 return formattedTime
 }



 getPostData(postId: string) 
 {
   this.axios.getData(this.apiUrl+postId).subscribe( (data: any) => {
    // this.postUserID = data.userid
     this.postDate  =  this.unixToDate(data.date)
     this.postText = data.text
   })
 }


 handleClick() {

  this.sub = this.axios.deletePost(this.postID).subscribe( (data: any) => 
  { console.log(`the resp from deletePost is ${data}`);
  })
}

  ngOnInit(): void {

    this.getPostData(this.postID)
  }

  ngOnDestory(): void {
    this.sub
  }

}
