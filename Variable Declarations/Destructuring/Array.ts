console.log('-----Array Destructuring-----')
let fruits = ['Banana', 'Apple'];
let [fruit1, fruit2] = fruits;

console.log(`
Fruit1: ${fruit1}
Fruit2: ${fruit2}
`)
/*
Fruit1: Banana
Fruit2: Apple
*/

console.log('-----Swap Variable-----')

let [newFruit1, newFruit2] = [fruit1, fruit2]

console.log(`
New Fruit1: ${newFruit1}
New Fruit2: ${newFruit2}
`)
/*
New Fruit1: Apple
New Fruit2: Banana
*/