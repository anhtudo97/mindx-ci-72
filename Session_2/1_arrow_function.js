// Normal
function hello() {
    console.log("Hello!");
}

// Anonymous function
const newFn = function (a, b) {

}

// Arrow function - es6
const arrowFn = (a, b) => {
    return a * b
}

// Short-hand arrow function
// const add = (a,b) => a + b
const add = (a, b) => { return a + b }

// this - context
function thisNFn() {
    console.log(this);
}
thisNFn()

const thisAFn = () => {
    console.log(this);
}
thisAFn()

const btnClickMe = document.querySelector("#btnClickMe")
btnClickMe.addEventListener("click", function () {
    console.log('123', this);
})
// btnClickMe.addEventListener("click", () => {
//     console.log('123', this);
// })