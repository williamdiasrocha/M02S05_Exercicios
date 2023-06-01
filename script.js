// Exercício 1 - Spread

function concatenarArrays(...arrays){
    return [...arrays.flat()];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const resultado = concatenarArrays(array1, array2, array3);
console.log(resultado);


// Exercício 2 - Rest

function contarNomes(...nomes) {
    return nomes.length;
}

const quantidade1 = contarNomes('João', 'Maria', 'Henrique');
console.log(quantidade1);

const quantidade2 = contarNomes('Ana', 'Carlos', 'Sofia', 'Geovane');
console.log(quantidade2);


// Exercício 3 - ForEach Função de Array

const frutas = ['maçã', 'banana', 'laranja', 'morango'];

frutas.forEach((fruta) => {
    console.log(fruta);
})

// Exercicio 4 - Array map

const nomes = ["John", "Jane", "Mark", "Alice"];

const iniciais = nomes.map((nomes) => {
  return nomes.charAt(0);
});

console.log(iniciais); 


// Exercicio 5 - Filter na função de Array

const carros = [
    { marca: 'Toyota', modelo: 'Corolla', ano: 2015 },
    { marca: 'Honda', modelo: 'Civic', ano: 2009 },
    { marca: 'Ford', modelo: 'Mustang', ano: 2022 },
    { marca: 'Chevrolet', modelo: 'Camaro', ano: 2013 },
    { marca: 'BMW', modelo: 'X5', ano: 2018 },
];

const anoCarro = carros.filter((carros) => {
    return carros.ano > 2010;
});

console.log(anoCarro);

// Exercicio 6 - Find na Função de Array

//OBS.: neste exercício utilizei o array criado no exercício acima para reaproveitamento do código.

const primeiroCarro = carros.find((carros) => {
    return carros.ano > 2010;
});

console.log(primeiroCarro);

