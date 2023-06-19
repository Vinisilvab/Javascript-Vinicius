//Unidimensionais
// podemos criar vetores assim:

const num1 = new Array( 30, -1, 5, 3, 121);

//ou podemos fazer:

const num2 = [-2,40,16,111,33,64];

console.log(num1)
console.log(num2)

//Acessando elementos diversos dos arrays 

console.log(`primeiro elemento de num1: ${num1[0]}`)
console.log(num2[0])

// Acesse o terceiro elemento de num1

console.log(num1[2])

//Acesse o quinto elemento de num2

console.log(num2[4])

//soma de elementos

console.log(num1[0 + num1[1]])

// Array Bidimensionais
console.clear();

const matrix =[
    ['Banana','Maçã','Pêra'],
    ['laranja', true, 1],
    [null, "uva", -350],
]
console.log(matrix)
console.log(matrix[0])
console.log(matrix[0][1])

console.clear()

//Alterar um valor do array

let moedas = ['Real','Dólar','Coroa','peso'];

console.log(moedas);
moedas[1] = 'Yen';
console.log(moedas);

let matrix2 = [
    [1,2,3],
    [4,5,6],
]

matrix2[0][1] = 10;
console.log(matrix2)

//tamanho de arrays

let vetor = [0,1,2,3,4]
console.log(vetor.length)

//Remover e/ou inserir elementos
//pop()<- inserir

const frutas = ["Laranja","Banana", "manga"]
let x = frutas.pop()

console.log(frutas)
console.log(x)

//shift <- remover o primeiro

let y = frutas.shift()
console.log(frutas);
console.clear()

//delete <- remove qualquer um
const veiculos = ["Carro","Barcos","Moto"]
delete veiculos[1];
console.log(veiculos)

//add elementos
let z = veiculos.push("Avião")
console.log(veiculos)