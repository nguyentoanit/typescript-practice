let first: Array<number> = [1, 2];
let second: Array<number> = [3, 4];
let bothPlus: Array<number> = [0, ...first, ...second, 5];

console.log(bothPlus); // [ 0, 1, 2, 3, 4, 5 ]

let defaultPizza: Object = { name: 'Default', size: 'L', price: '5$' };
let pizzaA: Object = { ...defaultPizza, name: 'Pizza A' };

let pizzaDefault: Object = { name: 'Pizza B', ...defaultPizza }
console.log(pizzaA); // { name: 'Pizza A', size: 'L', price: '5$' }
console.log(pizzaDefault); // { name: 'Default', size: 'L', price: '5$' }
