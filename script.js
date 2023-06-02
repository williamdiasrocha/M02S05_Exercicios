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

// Exercicio 7 - Reduce

const produtos = [
    { nome: 'Camiseta', preco: 59.99 },
    { nome: 'Calca Jeans', preco: 79.99 },
    { nome: 'Tênis', preco: 39.99 },
    { nome: 'Meia', preco: 9.99 },
];

const totalValor = produtos.reduce((acumulado, produtos) => {
    return acumulado + produtos.preco;
}, 0);

console.log(totalValor);

// Exercício 8 - Promise com método fetch

function fazerRequisicao(url) {
    return new Promise(function(resolve, reject){
        fetch(url)
        .then(function(response) {
            if(response.ok) {
                resolve(response.json());
            } else {
                reject(new Error('Erro ao fazer a requisicao. Codigo: ' + response.status));
            }
        })
        .catch(function(error) {
            reject(error);
        });
    });
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

fazerRequisicao(apiUrl)
.then(function(dados) {
    console.log('Dados recebidos: ', dados);
})
.catch(function(error) {
    console.log('Ocorreu um erro: ', error);
});


// Exercicio 9 - Função Assíncrona

function aguardarTempo(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

async function exemploAssincrono() {
    console.log('Início da função assíncrona');

    try {
        await aguardarTempo(2000); // aguardar por 2 segundos

        await aguardarTempo(1000); // aguardar por mais 1 segundo

        const resposta = await fetch('https://api.exemplo.com/dados');
        const dados = await resposta.json();
        console.log('Dados recebidos: ', dados);

        console.log('Fim da função assincrona');
    } catch (error) {
        console.log('Ocorreu um erro: ', error);
    }
}

exemploAssincrono();

// Exercício 10 - Função Await

function aguardarTempo(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function exemploAwait() {
    console.log('Inicio da função await');

    try {
        console.log('Antes do await');

        await aguardarTempo(2000); 

        console.log('Após o await');

        await aguardarTempo(1000);

        console.log('Fim da função await');
    } catch (error) {
        console.log('Ocorreu um errro: ', error);
    }
}

exemploAwait();