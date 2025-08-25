//Cria um array de modelos de carros
const carros = ['gol', 'focus', 'celta'];
const num = [1, 8, 2, 3, 4, 5, 6]; //array de números


export function exemploFor() {
    console.log('----FOR---');
    //CONVENCIONAL
    //usa FOR padrão e atributo length para saber
    //o tamanho do array
    for (let i = 0; i < carros.length; i++) console.log(carros[i]);
}

export function exemploForeach() {
    console.log('----FOREACH---');
    //FOREACH
    //Todo objeto Array implementa o FOREACH
    //FOREACH(FUNCAO_CALLBACK(ELEMENTO_DO_ARRAY){})
    carros.forEach(imprimeCarros);
}

function imprimeCarros(car) {
    console.log(car);
}

//OU usando função anônima
export function exemploForeachAnn() {
    console.log('\n');
    carros.forEach(function (car) {//callback
        console.log(car);
    });

    console.log('\n');
    //simplificando com arrow functions
    carros.forEach((car) => console.log('=>' + car));

}

//PROCURANDO UM ITEM COM FIND

export function exemploFind() {
    let busca = 'celta';
    console.log('\n----FIND---');
    console.log(
        carros.find((car) => {
            if (car === busca) return true;
        })
    ); //retorna o item e encerra a iteração



    busca = 'gol';
    let indiceAchado = carros.findIndex((car) => car === busca);
    console.log(
        indiceAchado >= 0
            ? `encontrado ${carros[indiceAchado]} na posicao ${indiceAchado}`
            : 'não encontrado'
    );

    console.log(
        num.find((n) => {
            if (n % 2 == 0) return true;
        })
    ); //retorna o primeiro número par encontrado

}

//FILTRANDO ITENS COM FILTER
//RETORNA UM ARRAY COM ELEMENTOS QUE PASSAM
//NO TESTE DO CALLBACK E QUE RETORNA TRUE.
//O CALLBACK DEVE RETORNAR UM BOOLEAN

export function exemploFilter() {

    console.log('\n----FILTER---');
    let busca = 'gol';
    let naoGol = carros.filter((car) => car != busca)
    console.log(naoGol); //retorna array com os diferentes da busca
    console.log(carros)

    let pares = num.filter((n) => {
        if (n % 2 == 0)
            return true;
    })
    console.log(pares); //retorna array com os pares

    let impares = num.filter(n => n % 2 != 0); //retorna array com os impares
    console.log({ impares }); //as {} é só para o console mostra o nome da variável

}

export function exemploMap() {
    /**
     * O método MAP chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada.
     */
    console.log('\n----MAP---');
    
    console.log(
        num.map(function(n){
            if (n % 2 == 0) return 'par';
            else return 'impar';
        })
    );
    console.log(
        num.map(n => n % 2 == 0 
                ? 'p' 
                : 'i' 
            )
        );

    let numquadrado = num.map(n => n ** 2);
    console.log(num);
    console.log(numquadrado);
   
}



/**
 *  O método REDUCE retorna um único valor baseado em operações realizadas com os itens do
 * array, por exemplo retornar a soma do total de elementos de um array.
 */

export function exemploReduce() {

    let numeros = [10, 2, -3, 4, 50];
    console.log(numeros.reduce((soma, item) =>{
        console.log(`\t\t${soma}`);
        return soma += item;
    }));
    //Retorna a soma igual a 63

    let soma_num= numeros.reduce((soma, item, indice, numeros) =>{
        console.log(`\t\t${soma}`) 
        return soma += item
    }, 0);
    console.log(soma_num);
    
}
