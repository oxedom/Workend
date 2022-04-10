import { Input,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  userid : string = ''

  user : object = {}

  constructor() { }

  ngOnInit(): void {
    this.user = { name: "amit", mail: 'foxy@gmail.com', id: "123"}
  }

}
