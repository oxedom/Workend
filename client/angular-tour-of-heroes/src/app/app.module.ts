import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { FormsModule, NgForm } from '@angular/forms';
//Comps
import { MatSliderModule } from '@angular/material/slider';
import { PostComponent } from './comps/post/post.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { FeedComponent } from './comps/feed/feed.component';
import { AddPostComponent } from './comps/add-post/add-post.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { ProfileComponent } from './comps/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent, PostComponent, FeedComponent, AddPostComponent, NavbarComponent, ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
