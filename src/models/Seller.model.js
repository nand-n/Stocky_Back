const {EntitySchema} = require('typeorm')
const {Base} =require('./BaseModel')
class Seller extends Base {
    //Define additional properties specific to bigo draw
    constructor(){
        super()//call the constractor of the Base entity to inherit its properties 
        this.name= {type:"text" }
        this.cognome= {type:"text" }
        this.email= {type:"text" }
        this.numeroditelefono= {type:"double precision" }
        this.nomeazienda= {type:"text"}
        this.tutto= {type:"bool"}
        this.abbigliamento= {type:"bool" }
        this.cosmetica= {type:"bool"  }
        this.casa= {type:"bool" }
        this.benidiconsumo= {type:"bool" }
        this.calzature= {type:"bool" }
        this.accessori= {type:"bool" }
        this.altro= {type:"bool" }
    }

}

module.exports= new EntitySchema({
    name:"Seller",
    columns:new Seller()
})