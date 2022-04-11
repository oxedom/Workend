export class Task {
    private text: string 
    private userid: string
    private date: string
    private title: string
    private completed: boolean
    constructor(taskObj : any) 
    {
        this.title = taskObj.title
        this.userid = taskObj.userid
        this.text = taskObj.text
        this.completed = taskObj.completed
        this.date = new Date().getTime().toString()
    }
}
