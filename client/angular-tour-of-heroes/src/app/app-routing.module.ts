import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './comps/feed/feed.component';
import { ProfileComponent } from './comps/profile/profile.component';


const routes: Routes = [   { path: 'feed', component: FeedComponent}, 
{ path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
