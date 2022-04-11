import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { Task } from '../models/taskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  apiUrl: string = `http://localhost:8000/api/user/tasks/`
  taskText : string = ""
  taskUserID: string = ""
  taskDate: string = ""
  taskTitle: string = ""
  taskCompleted : string = ""
  taskCompletedString: string = ""
  constructor(private axios : HttpServiceService) { }
  @Input()
  taskID: string = ''
  taskSub: Subscription = new Subscription()

  updateTaskString () { 
    if(this.taskCompleted == 'true') { this.taskCompletedString = 'Finished' }
    else { this.taskCompletedString = 'Unfinished' } 
  }


 getTaskData(taskID: string) 
 {
   this.taskSub = this.axios.getData(`http://localhost:8000/api/user/tasks/${this.taskID}`).subscribe( (data: any) => {
    // this.postUserID = data.userid
    console.log(data)
     this.taskDate  =  this.axios.unixToDate(data.date)
     this.taskText = data.text
     this.taskTitle = data.title
     this.taskCompleted = data.completed
     this.updateTaskString()
    //  this.getUserData(data.userid)
   })
 }

 updateTask() 
 {
   
   if(this.taskCompleted == 'true' ) { this.taskCompleted = 'false' }
   else { this.taskCompleted = 'true'}
   this.updateTaskString()
   let taskObj = 
   {
    userid: this.taskUserID,
    date: this.taskDate ,
    text: this.taskText ,
    title: this.taskTitle ,
    completed : this.taskCompleted
    }
    let updatedTask = new Task(taskObj)

   this.taskSub = this.axios.updateTask(this.taskID, updatedTask).subscribe( ( data : any) => {
     console.log(`The resp from the update dask is ${data}`)
   })
 }

 handleClick() {

  this.taskSub = this.axios.deleteTask(this.taskID).subscribe( (data: any) => 
  { console.log(`the resp from deletePost is ${data}`);
  })
}



// ${this.taskID}
  ngOnInit(): void {
    this.taskSub = this.axios.getData(`http://localhost:8000/api/user/tasks/`).subscribe( (data : any) => {
    this.getTaskData(this.taskID)
    
    })
  }
  ngOnDestory(): void {
    this.taskSub
  }
}
