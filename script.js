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

