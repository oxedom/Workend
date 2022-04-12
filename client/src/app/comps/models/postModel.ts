export class Post {
    private text: string 
    private userid: string
    private date: string
    
    constructor(postObj : any) 
    {
        this.userid = postObj.userid
        this.text = postObj.text
        this.date = new Date().getTime().toString()
    }
}
