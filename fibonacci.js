"use strict";

function isFibonacci(n) {
    let prev = 0;
    let current = 1;
    let temp;
    while (current < n) {
        temp = prev + current;
        prev = current;
        current = temp;
    }
    return (current === n || n === 0) ? "O numero pertence prev sequencia" : "O numero nao pertence prev sequencia";
}


let n = 7;
console.log(isFibonacci(n));


