const quantidade = 6;

function numerosImpares(valor) {
    let contar = 0;
    let novoValor = valor;
    while(contar < quantidade){
        if(novoValor % 2 !== 0){
            console.log(novoValor);
            contar++;
        }
        novoValor++;
    } 
}
numerosImpares(10);