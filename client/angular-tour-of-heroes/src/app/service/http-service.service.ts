import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../comps/models/postModel';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  url: string = 'http://localhost:8000/api/user/posts/'

  unixToDate(unixTime: string) 
{
 var date = new Date(parseInt(unixTime) * 1000);
 var hours = date.getHours();
 var minutes = "0" + date.getMinutes();
 var seconds = "0" + date.getSeconds();
 var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
return formattedTime
}



  //Give it a URL and it will find data for you
  getData(url: string): any { return this.axios.get(url) }

  deletePost(postId: string) {
    return this.axios.delete(this.url+postId)
  }

  addPost(postObj: Post) {

    
    return this.axios.post(this.url, postObj)}

  constructor(private axios: HttpClient) { }
}

