"use strict";

const data = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 1984.53
};

function calculaPercentual(data) {
    const soma = Object.values(data).reduce((a, b) => {
        return a + b
    });
    console.log("Percentual de Representacao");
    for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${(value / soma * 100).toFixed(2)}%`);
    }

}

calculaPercentual(data);







