'use strict'


//function on adding two numbers
function addTwo(number){
    return number + 2;
}
let myString = "The answer is : ";
const finalAnswer = addTwo(9);
console.log(`${myString}`, finalAnswer);

//example 2 on functions

function greet(greeting, firstName, lastName, townShip) {
    return `${greeting}! ${firstName} ${lastName} from  ${townShip}`;
}

console.log (greet('Salutations', 'Winnie', 'Bosibori', 'Nyahururu'));
console.log (greet('Salutations', 'Eddie', 'Matara', 'Kisii'));
console.log (greet('Salutations', 'Ethan', 'Leshan', 'Narok'));
console.log (greet('Salutations', 'Cynthia', 'Ateku', 'Kitale'));