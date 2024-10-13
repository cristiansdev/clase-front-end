const carro = {
    id: 1,
    nombre: 'ford',
    marca: {
        nombre: 'ford',
        lastname: 'mustang',
        year: 1969,
        color: 'red',
        price: 5000
    },
    inventario: [
        { id: 1, color: 'red', price: 5000 },
        { id: 2, color: 'verde', price: 5000 },
        { id: 3, color: 'azul', price: 5000 }
    ],
    saludo: function() {
        return `Hola ${this.nombre}`;
    },
    totalInventario: function() {
        let total = 0;
        this.inventario.forEach(item => {
            total += item.price;
        });
        return total;
    }
};

// find
const carroVerde = carro.inventario.find(item => item.color === 'verde');
console.log(carroVerde); // {id: 2, color: 'verde', price: 5000}

// filter
const carrosEconomicos = carro.inventario.filter(item => item.price < 6000);
console.log(carrosEconomicos); // [{id: 1, ...}, {id: 2, ...}, {id: 3, ...}]

// some
const hayCarrosRojos = carro.inventario.some(item => item.color === 'red');
console.log(hayCarrosRojos); // true
