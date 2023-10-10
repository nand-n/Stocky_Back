const {EntitySchema} = require('typeorm')
const {Base} =require('./BaseModel')
class Contact extends Base {
    //Define additional properties specific to bigo draw
    constructor(){
        super()//call the constractor of the Base entity to inherit its properties 
        this.name= {type:"text" }
        this.cognome= {type:"text" }
        this.email= {type:"text" }
        this.oggetto= {type:"text" , nullable:true }
        this.messaggio= {type:"text" , nullable:true }
    }

}

module.exports= new EntitySchema({
    name:"Contact",
    columns:new Contact()
})