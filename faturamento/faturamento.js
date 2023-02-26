"use strict";

const fs = require("fs");

const data = JSON.parse(fs.readFileSync(`${__dirname}/dados.json`, "utf-8"));

function faturamento(data) {

    const valoresSemana = data.map(valor => valor.valor).filter(valor => valor > 0);

    const min = Math.min(...valoresSemana);
    const max = Math.max(...valoresSemana);

    let sum = valoresSemana.reduce((a, b) => {
        return a + b
    });

    const media = sum / valoresSemana.length;
    const acimaMedia = valoresSemana.filter(valor => valor > media).length;

    return `Menor valor: ${min}\nMaior valor: ${max}\nNumero de dias com faturamento acima da media: ${acimaMedia}`
}

console.log(faturamento(data));
