import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Post} from '../models/postModel' 

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor() { }

  postContent : string = ""
  notValid : boolean = false

  onSubmit(f : NgForm) {
    if(!f.valid) { this.notValid = true; return } else { this.notValid = false}
    
    let content = f.value.postContent
    //USER ID is currently hardcoded
    let postObj = { userid: "623c7440f622378a8955305b", text: content }
    let newPost = new Post(postObj)
    console.log(newPost)
  
    //Resets Form and value of postContent State to a null string
    this.postContent = ""
  }
  handleClick () {  alert("I loaded :)")}

  ngOnInit(): void {
   
  }

}
