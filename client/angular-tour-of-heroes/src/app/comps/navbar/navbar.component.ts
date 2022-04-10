import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreService } from 'src/app/service/store.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() 
  modeUpdate:EventEmitter<any> = new EventEmitter()

  
  mode: boolean = true

  handleClick() 
  {
    this.store.updateMode()
  }
  constructor(private store : StoreService) {
   }

  //KEVIN READ THIS:
  //I have made a button on the NavBar comp called work/social mode, it toogles a boolean from
  //true false, if true it shows social post if false it shows work posts
  //how do I update the state inside the feed comp from the nav comp?

  ngOnInit(): void {
  }

}
