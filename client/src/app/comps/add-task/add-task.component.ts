import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { Task} from '../models/taskModel' 

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private axios : HttpServiceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  taskTitle: string = ""
  taskCompleted: boolean = false
  sub: Subscription = new Subscription()
  taskContent : string = ""
  notValid : boolean = false

  onSubmit (f : NgForm) {
    if(!f.valid) { this.notValid = true; return } else { this.notValid = false}
    
    let content = f.value.taskContent
    //USER ID is currently hardcoded
    let taskObj = {
        userid: localStorage.getItem('userid'),
        title: f.value.taskTitle,
        text: content ,
        completed: f.value.taskCompleted

      }
    let newtask = new Task(taskObj)
    this.sub = this.axios.addTask(newtask).subscribe( (data : any) => {
      console.log(`the res from addTask API is:  ${data} `)
    })
  
    //Resets Form and value of taskContent State to a null string
    this.taskContent = ""
    this.taskCompleted = false
    this.taskTitle = ""
  }
  handleClick () {  alert("I loaded :)")}

  

  ngOnDestory(): void {
    this.sub
  }

}



