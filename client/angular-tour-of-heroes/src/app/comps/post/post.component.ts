import { Component, Input, NgModule, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/service/http-service.service';
@Component({
  selector: 'app-post[postID]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  constructor(private logic: HttpServiceService) 
  {
    
 }

 //POST COMP:
 //Needs to recevice a POST ID to render itself (otherwise it will throw an error)
 //Post ID is recived from Fathercomp 

  sub: any = ""
  
  @Input()  
  postID: string = '623d93736bb07267a44310f7'

  postText : string = ""
  postUserID: string = ""
  postDate: string = ""
  
  apiUrl: string = `http://localhost:8000/api/user/posts/${this.postID}`


 getPostData() 
 {
  //  if(this.postID === '') { throw Error}
   this.logic.getData(this.apiUrl).subscribe( (data: any) => {
    this.postUserID = data.userid
    this.postDate  = data.date
     this.postText = data.text
   })
 }

  ngOnInit(): void {
    this.getPostData()
  }

  ngOnDestory(): void {
    this.sub
  }

}
