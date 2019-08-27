"use strict";
var a = "Test1";
var b = "Test2";

console.log("Logged" + a);

const testVar = (params) => {
    let a = 30;
    console.log("Function Logged:" + a);
    
    if (true) {
        a = 50;
        console.log("Block Logged:" + a);
    }
    console.log("Here:" + a);

}

const pizza = [
    {
        name: "cheese",
        number: 1,
        price: 1
    }, 
    {
        name: "mushroom",
        number: 2,
        price: 1
    },
    {
        name: "pineapple",
        number: 3,
        price: 1
    }
]

a => a += a;
testVar();
console.log("End Logged:" + a);

var pizzaObj = {
    pepp: "monday",
    array: [
        1,
        2,
        3
    ],
    funFunction (planePeople) {
        console.log(`hi ${planePeople} outside my window!`)
    }
}