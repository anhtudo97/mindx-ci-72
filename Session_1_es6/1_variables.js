console.log("Hi, hello Tu");

// const
const x = "new value"
console.log(x);
// x = "old value" // Assignment to constant variable.

const arr = []
console.log('old',arr);
arr.push(1) // update value
console.log('new',arr);

// let
let y = 'value'
console.log(y);
y = 'new value for y'
console.log(y);
{
    let newValue = 'uio'
    console.log(newValue);
}

// console.log(newValue); //newValue is not define

// var
console.log(z); // hoisting
var z = "Hi z"
{
    var bar = "foo"
}

console.log(bar);