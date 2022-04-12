import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Post} from '../models/postModel' 
import { HttpServiceService } from 'src/app/service/http-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private axios : HttpServiceService) { }

  sub: Subscription = new Subscription()
  postContent : string = ""
  notValid : boolean = false

  onSubmit (f : NgForm) {
    if(!f.valid) { this.notValid = true; return } else { this.notValid = false}
    
    let content = f.value.postContent
    //USER ID is currently hardcoded
    let postObj = { userid: "623c7440f622378a8955305b", text: content }
    let newPost = new Post(postObj)
    this.sub = this.axios.addPost(newPost).subscribe( (data : any) => {
      console.log(`the res from addPost API is: 
      ${data}
      `)
    })
  
    //Resets Form and value of postContent State to a null string
    this.postContent = ""
  }
  handleClick () {  alert("I loaded :)")}

  ngOnInit(): void {
   
  }

  ngOnDestory(): void {
    this.sub
  }

}
