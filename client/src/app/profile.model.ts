import { HttpServiceService } from "./service/http-service.service"
import { HttpClient } from "@angular/common/http"
export class Profile {
  static userid: string
  public fname: string
  public userid: string
  public birthday: Date
  public Username: string
  public lname: string
  public department: string
  public email: string
  public tasks : []
  public posts : []


  constructor(profile: any) {
    this.userid = profile.userid
    this.fname = profile.fname
    this.birthday = profile.birthday
    this.Username = profile.Username
    this.lname = profile.lname
    this.department = profile.department
    this.email = profile.email
    this.tasks = profile.tasks
    this.posts = profile.posts
  }

}
