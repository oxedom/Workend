import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpServiceService } from 'src/app/service/http-service.service';

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

  constructor(private axios : HttpServiceService) { }
  @Input()
  taskID: string = ''
  taskSub: Subscription = new Subscription()

 getTaskData(taskID: string) 
 {
   this.taskSub = this.axios.getData(`http://localhost:8000/api/user/tasks/${this.taskID}`).subscribe( (data: any) => {
    // this.postUserID = data.userid
    console.log(data)
     this.taskDate  =  this.axios.unixToDate(data.date)
     this.taskText = data.text
     this.taskTitle = data.title
     this.taskCompleted = data.completed
    //  this.getUserData(data.userid)
   })
 }


 handleClick() {

  this.taskSub = this.axios.deletePost(this.taskID).subscribe( (data: any) => 
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
