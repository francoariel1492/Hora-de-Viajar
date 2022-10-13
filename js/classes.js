export class visaWHV {
    constructor(id, usuario, password, maderas,maderasPrecios, guitarras, guitarrasPrecio, total) {
        this.id = id;
        this.usuario = usuario;
        this.password = password;
        this.maderas = maderas;
        this.maderasPrecios = maderasPrecios;
        this.guitarras = guitarras;
        this.guitarrasPrecio = guitarrasPrecio;
        this.total = total;
        
    }
}



export class usuario {
    constructor(nombre, edad, nacionalidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;        
    }
}

