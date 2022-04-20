export class Profile {
  static userid: string
  public fname: string
  public userid: string
  public birthday: string
  public username: string
  public lname: string
  public department: string
  public email: string
  public tasks : []
  public posts : []


  constructor(profile: any) {
    this.userid = profile.userid
    this.fname = profile.fname
    this.birthday = profile.birthday
    this.username = profile.username
    this.lname = profile.lname
    this.department = profile.department
    this.email = profile.email
    this.tasks = profile.tasks
    this.posts = profile.posts
  }

  getAge() {
    console.log(`${this.fname}+${this.lname}`)
  }
}
