const ordenar = require('./bubbleSort');

function print() {
    console.log(ordenar(numbers));
    console.log(ordenar(numbers2));
};

const numbers = [9, 4, 200, 10, 333, 10, 15, 2, 12, 3, 10, 100, 14, 13];
const numbers2 = [76, 57, 78, 83, 53, 70, 63, 87, 81, 87, 50, 89, 81];

print();