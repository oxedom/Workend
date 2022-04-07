import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../comps/models/postModel';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  url: string = 'http://localhost:8000/api/user/posts/'

  //Give it a URL and it will find data for you
  getData(url: string): any { return this.axios.get(url) }

  deletePost(postId: string) {
    return this.axios.delete(this.url+postId)
  }

  addPost(postObj: Post) {

    
    return this.axios.post(this.url, postObj)}

  constructor(private axios: HttpClient) { }
}
