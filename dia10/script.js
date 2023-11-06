class Animal {
    constructor(nombre, peso, edad) {
        this._nombre = nombre;
        this._peso = peso;
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get peso() {
        return this._peso;
    }

    set peso(peso) {
        this._peso = peso;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    informacion() {
        return "Nombre: " + this._nombre + " Edad: " + this._edad + " Peso: " + this._peso;
    }

}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this._raza = raza;
    }

    get raza() {
        return this._raza;
    }

    set raza(raza) {
        this._raza = raza;
    }

    informacion() {
        return super.informacion() + " Raza: " + this._raza;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this._sexo = sexo;
    }

    get sexo() {
        return this._sexo;
    }

    set sexo(sexo) {
        this._sexo = sexo;
    }

    informacion() {
        return super.informacion() + " Sexo: " + this._sexo;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this._color = color;
    }
    
    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }

    informacion() {
        return super.informacion() + " Color: " + this._color;
    }
}

let perro = new Perro("Rex", "30 kg", "5 años", "Labrador");
let gato = new Gato("Luna", "4 kg", "2 años", "Hembra");
let conejo = new Conejo("Simba", "8 kg", "7 años", "Blanco");

let arreglo = [perro, gato, conejo];

function instancias() {
    let listaAnimales = document.getElementById("listaAnimales");

    for(let animal in arreglo) {
        let elementoLista = document.createElement("li");
        elementoLista.innerText = arreglo[animal].informacion();
        listaAnimales.appendChild(elementoLista);
    }
    
}