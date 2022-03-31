import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {



  //Give it a URL and it will find data for you
  getData(url: string): any { return this.axios.get(url) }


  constructor(private axios: HttpClient) { }
}
