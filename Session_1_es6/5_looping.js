// For
const array = [1, 2, 3]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

const arrayObject = [
    {
        name: "tuanh",
        age: 3
    },
    {
        name: "Mr.A",
        age: 4
    },
    {
        name: "Mr.B",
        age: 5
    },
]

for (const iterator of arrayObject) {
    console.log(iterator);
}

const object = {
    // name: "tuanh",
    age: 4
}

for (const key in object) {
    if(key && key === 'name'){
        console.log("Have name");
    }else{
        console.log("Dont have name");
    }
}

let i = 0;
while(i < array.length){
    console.log("while: ", array[i]);
    i++;
}

// i3 11xxx
// ram 16g
// ssd 
