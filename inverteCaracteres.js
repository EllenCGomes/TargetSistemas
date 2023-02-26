"use strict";

function inverteCaracteres(string) {
    let newString = ""
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
    return newString
}

const string = "Hello"
console.log(inverteCaracteres(string));