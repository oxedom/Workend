import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Post } from '../comps/models/postModel';
import { Task } from '../comps/models/taskModel';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  postUrl: string = 'http://localhost:8000/api/user/posts/'
  taskUrl: string = 'http://localhost:8000/api/user/tasks/'
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

  deletePost(postId: string) { return this.axios.delete(this.postUrl+postId) }

  addPost(postObj: Post) { return this.axios.post(this.postUrl, postObj)}

  deleteTask(taskID: string) { return this.axios.delete(this.taskUrl+taskID)}

  addTask(taskObj : Task) { return this.axios.post(this.taskUrl, taskObj)}
  updateTask(taskID : string, taskObj: Task) { return this.axios.put(this.taskUrl+taskID, taskObj)}
  constructor(private axios: HttpClient) { }
}

