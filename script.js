alert(`Vamos realizar algumas operacoes matemáticas?!`)

let firstNumber = prompt(`Digite o primeiro número`)
let secondNumber = prompt(`Digite o segundo número`)

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`O resultado da soma é: ` + sum)
alert(`O resultado da subtração é: ` + sub)
alert(`O resultado da multiplicação é: ` + multi)
alert(`O resultado da divisão é: ` + div)
alert(`O resto da divisão dos dois numeros inseridos é: ` + restDiv)

if((firstNumber + secondNumber) % 2 === 0) {
  alert(`A soma dos numeros inseridos é PAR`)
} else {
  alert(`A soma dos numeros inseridos é IMPAR`)
}

if(firstNumber == secondNumber)  {
  alert(`Os número inseridos são IDENTICOS`)
} else {
  alert(`Os número inseridos são DIFERENTES`)
}