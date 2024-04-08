// 1
console.log("Hello World")

// 2
let num1 = 2
let num2 = 3

console.log(num1 + num2)

// 3
let valor = 2
let result = typeof valor

if (result === "number") {
  console.log("É um número")
} else {
  console.log("Não é número")
}

// 4

let tipo = "Palavra"
let res = typeof tipo

if (res === "string") {
  console.log("É um String")
} else {
  console.log("Não é String")
}

// 5

let booleano = true
let resultado = typeof booleano

if (resultado === "boolean") {
  console.log("É um Booleano")
} else {
  console.log("Não é Booleano")
}

// 6

let sub1 = 3
let sub2 = 3

console.log(sub1 - sub2)

// 7

let mult1 = 3
let mult2 = 3

console.log(mult1 * mult2)

// 8

let div1 = 10
let div2 = 2

console.log(div1 / div2)

// 9

let numero = 3

function parImpar (num) {
  let verificar = num % 2
  if (verificar == 0) {
    console.log("É um número par")
  } else {
    console.log("Não é um número par")
  }
}
parImpar(numero)

// 10

let numeroImpar = 3

function imparPar (num) {
  let verificar = num % 2
  if (verificar != 0) {
    console.log("É um número impar")
  } else {
    console.log("Não é um número impar")
  }
}
imparPar(numeroImpar)