// const btnClick = document.querySelector('#btn-click')
// console.log(btnClick);

// btnClick.addEventListener("click", function(){
//     alert("Hong be oi!")
// })

const btn = document.querySelector('.btn-click')
const btnCl = document.getElementsByClassName('btn-click')
console.log(btn);
console.log(btnCl);

const input = document.querySelector('#input-text')
// console.log({ input });
input.addEventListener("change", function (e) {
    console.log('event', e);
    console.log(input);
})

