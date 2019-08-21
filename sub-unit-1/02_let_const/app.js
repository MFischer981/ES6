"use strict";
var a = "Test1";
var b = "Test2";

console.log("Logged" + a);

const testVar = (params) => {
    let a = 30;
    console.log("Function Logged:" + a);
    
    if (true) {
        var a = 50;
        console.log("Block Logged:" + a);
    }
    console.log("Here:" + a);

}

a => a += a;
testVar();
console.log("End Logged:" + a);
