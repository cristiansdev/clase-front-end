export const obtenerInventario = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            { id: 1, color: 'red', price: 5000 },
            { id: 2, color: 'verde', price: 5000 },
            { id: 3, color: 'azul', price: 5000 }
        ]), 1000);
    });
};
