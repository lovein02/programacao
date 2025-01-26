const consumoAutomovel = 12;
function gastoCombustivel(tempoGasto, velocidadeMedia){
    const distancia = tempoGasto * velocidadeMedia;
    const consumoFinal = distancia / consumoAutomovel;

    return consumoFinal.toFixed(3);
}

console.log(gastoCombustivel(10, 85));
console.log(gastoCombustivel(2, 92));
console.log(gastoCombustivel(22, 67));