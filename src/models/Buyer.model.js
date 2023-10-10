const {EntitySchema} = require('typeorm')
const {Base} =require('./BaseModel')
class Buyer extends Base {
    //Define additional properties specific to bigo draw
    constructor(){
        super()//call the constractor of the Base entity to inherit its properties 
        this.name= {type:"text" }
        this.cognome= {type:"text" }
        this.email= {type:"text" }
        this.numeroditelefono= {type:"double precision" , nullable:true }
        this.sitoweb= {type:"text", nullable:true}
        this.nomeazienda= {type:"text", nullable:true}
        this.tutto= {type:"bool" , nullable:true}
        this.abbigliamento= {type:"bool", nullable:true }
        this.cosmetica= {type:"bool" , nullable:true }
        this.casa= {type:"bool" , nullable:true}
        this.benidiconsumo= {type:"bool" , nullable:true}
        this.calzature= {type:"bool" , nullable:true}
        this.accessori= {type:"bool" , nullable:true}
        this.altro= {type:"bool" , nullable:true}
    }

}

module.exports= new EntitySchema({
    name:"Buyer",
    columns:new Buyer()
})