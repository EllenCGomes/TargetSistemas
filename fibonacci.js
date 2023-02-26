"use strict";

function isFibonacci(n) {
    let a = 0;
    let b = 1;
    let temp;
    while (b < n) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return (b === n || n === 0) ? "O numero pertence a sequencia" : "O numero nao pertence a sequencia";
}


let n = 7;
console.log(isFibonacci(n));


