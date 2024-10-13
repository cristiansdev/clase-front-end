const carro = {
    id:1,
    nombre: 'ford',
    marca:{
        nombre: 'ford',
        lastname: 'mustang',
        year: 1969,
        color: 'red',
        price: 5000
    },
    saludo: function(){
        return `Hola ${this.nombre}`
    }
}

const saludo = carro.saludo()

console.log(saludo)