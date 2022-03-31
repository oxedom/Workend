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


@NgModule({
  declarations: [
    AppComponent, PostComponent
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
