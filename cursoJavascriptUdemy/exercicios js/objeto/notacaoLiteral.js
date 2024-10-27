const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //antes da ecmascript 15, e permite mudar o nome do atributo
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAtributo = 'nota'
const valorAtributo = 7.87

//antes
const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

//depois da ecmascript15
const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

//definir funções dentro de um objeto literal
//antes
const obj5 = {
    funcao1: function(){

    }
}

//depois
const obj6 = {
    funcao2(){

    }
}

console.log(obj5, obj6)