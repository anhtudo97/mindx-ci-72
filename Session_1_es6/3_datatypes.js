// primitive number, string, null, undefine => cell ô nhớ
const number = 1
const str = "hello"
const bool = true
const nullValue = null // null !== NULL !== Null
const undefinedValue = undefined

let x = 1;
let y = x;
x = 2
console.log("x: ", x);
console.log("y: ", y); // shift + alt + mũi tên đi xuống 

// reference array, object => address => cell ô nhớ
const array = [];
const object = {}

const object1 = {} // address: 12345
const object3 = {} // address: 45317
console.log(object1 === object3);
const object2 = object1
object1.name = "tuanh"
console.log("object 2: ", object2);