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

const nuevoInventario = [...carro.inventario, { id: 4, color: 'negro', price: 6000 }];
console.log(nuevoInventario); // Inventario con un nuevo carro agregado
