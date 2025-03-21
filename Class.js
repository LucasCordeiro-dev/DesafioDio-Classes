class Hero{
  constructor(heroName,heroAge,heroType) {
    this.heroName=heroName
    this.heroAge = heroAge
    this.heroType = heroType
  }

  atacar(){
    let ataque
        if(this.heroType === "mago"){
       ataque = "magia"
        }
        else if(this.heroType === "guerreiro"){
        ataque = "espada"
        }
        else if(this.heroType === "monge"){
        ataque = "artes mariciais"
        }
        else if(this.heroType === "ninja"){
        ataque = "shuriken"
        }
        return ataque
    }     

    escrever(){
        const ataque = this.atacar()
        console.log(`O herói ${this.heroName},que é um ${this.heroType},atacou usando ${ataque}`)
    }
}

    let primeiroGuerreiro = new Hero("Meliodas",10000,"guerreiro")
    let primeiroMago = new Hero("Merlin",20000,"mago")
    let primeiroNinja = new Hero ("Naruto",100,"ninja")
    let primeiroMonge = new Hero ("Dalai Lama",200,"monge")


    primeiroGuerreiro.escrever()    
    primeiroMago.escrever()
    primeiroNinja.escrever()
    primeiroMago.escrever()

  








