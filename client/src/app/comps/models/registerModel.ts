import { ThisReceiver } from "@angular/compiler"

export class Register {
    private fname: string
    private lname: string
    private username: string 
    private password: string
    private department: string
    private email: string
    constructor(private RegisterObj: any) 
    {
        const { fname, lname ,username , password , department , email} = RegisterObj
     
        this.fname = fname
        this.lname = lname
        this.username = username
        this.password = password
        this.department = department
        this.email = email
    }
}






{


}
Username
:
"kevin"
posts

Array
tasks

Array

0