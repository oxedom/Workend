import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginform', { static: false })
  loginForm!: NgForm;

  constructor(
      private http: HttpClient, 
      private authService: AuthService,
      private router: Router
    ) { }
    sub : Subscription = new Subscription()
  onLoginSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const reqObject = {
      username: username,
      password: password
    };

    this.sub = this.http.post('http://localhost:4000/api/user/login', reqObject, { headers: headers }).subscribe(
      
      // The response data
      (response : any) => {
      
        // If the user authenticates successfully, we need to store the JWT returned in localStorage
        this.authService.setLocalStorage(response);

      },

      // If there is an error
      (error) => {
        console.log(error);
      },
      
      // When observable completes
      () => {
        console.log('done!');
        this.router.navigate(['protected']);
      }

    );
  }

  ngOnInit() {
  }

  ngOnDestory() { this.sub}
}
