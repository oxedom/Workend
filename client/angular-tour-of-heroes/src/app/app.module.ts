import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { Routes, RouterModule } from '@angular/router';
//comps
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProtectedComponentComponent } from './protected-component/protected-component.component';
import { MatSliderModule } from '@angular/material/slider';
import { PostComponent } from './comps/post/post.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { FeedComponent } from './comps/feed/feed.component';
import { AddPostComponent } from './comps/add-post/add-post.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { TaskComponent } from './comps/task/task.component';
import { AddTaskComponent } from './comps/add-task/add-task.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'protected', component: ProtectedComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent, PostComponent, FeedComponent, AddPostComponent, NavbarComponent, ProfileComponent, TaskComponent, AddTaskComponent,
    LoginComponent,
    RegisterComponent,
    ProtectedComponentComponent
  ],
  imports: [
   
   
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
