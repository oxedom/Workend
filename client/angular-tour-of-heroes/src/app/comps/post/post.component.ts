import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/service/http-service.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  constructor(private logic: HttpServiceService) 
  {
    
 }

  @Input()
  sub: any = ""
  item : string = ""

 getJSONPlaceHolder(url: string) 
 {
   this.sub = this.logic.getData(url).subscribe( (data: any) => 
   {
    this.item = data[0].name
   })
 }


  ngOnInit(): void {
    this.getJSONPlaceHolder('https://jsonplaceholder.typicode.com/users')
  }

  ngOnDestory(): void {
    this.sub
  }

}
