class Cookie{
    constructor(color){
        this.color = color
    }

    getColor (){   //methods
        return this.color 
    }

    setColor(color){  //methods
        this.color = color 
    }
}

let cookieOne = new Cookie('Green')
let cookieTwo = new Cookie('Red')