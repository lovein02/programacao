// 1. Declaração de variáveis
// No javascrip moderno, você pode declarar variáveis usando var, let e const;
let nome = "Euclides"; // pode ser reatribuído
const idade = 28; // não pode ser reatribuído
var cidade = "Uberlândia"; // similar ao 'let', mas com escopo diferente.
// let: Escopo de bloco (local), pode ser reatribuído.
// const: Constante, não pode ser reatribuído.
// var: Escopo de função, mas não é recomendado no Javascript moderno.


//-------------------------------------------------------------------------------------------------------------------


// 2. Tipos de dados
// Javascript suporte diferente tipos de dados como:
let numero = 42; // número
let texto = "Olá, Mundo!"; // string
let booleano = true; // booleano (true/false)
let lista = [1, 2, 3] // array
let objeto = {nome: "Euclides", idade: 30}; // Objeto
let indefinido = undefined; // indefinido
let nulo = null // nulo


//-------------------------------------------------------------------------------------------------------------------


// 3. Operadores
// Aritmeticos: +, -, *, /, %(resto da divisão), ** (exponenciação)
// comparação: == (igual), ===(estritamente igual), != (diferente), !== (estritamente diferente), >, <, >=, <=
// Logicos: && (and), || (ou), !(não)


//-------------------------------------------------------------------------------------------------------------------


// 4. Estruras de controle
// condicionais (if / else)
// if

let idade1 = 18;
if(idade1 >= 18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}

// Switch
let cor ="azul"
switch(cor){
    case "vermelho":
        console.log("A cor é vermelha");
        break;
    case "azul":
        console.log("A cor é azul");
        break;
    default:
        console.log("Cor desconhecida")
}

// 5. loops
// for
for (let i= 0; i < 5; i++){
    console.log(i); //imprime de 0 a 4
}

// While

let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// 6. Funções
// as funções podem ser declaradas de várias formas

//Função simples
