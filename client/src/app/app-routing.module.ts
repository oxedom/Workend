import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './comps/feed/feed.component';
import { LoginComponent } from './comps/login/login.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { ProtectedComponentComponent } from './comps/protected-component/protected-component.component';
import { RegisterComponent } from './comps/register/register.component';


const routes: Routes = [
{ path: 'feed', component: FeedComponent}, 
{ path: 'profile', component: ProfileComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'protected', component: ProtectedComponentComponent }

];



@NgModule({
  //change it to true maybe lol
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
