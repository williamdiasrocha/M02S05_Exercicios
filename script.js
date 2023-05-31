// Exercício 1

function concatenarArrays(...arrays){
    return [...arrays.flat()];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const resultado = concatenarArrays(array1, array2, array3);
console.log(resultado);

