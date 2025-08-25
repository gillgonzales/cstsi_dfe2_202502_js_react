/**
 * ARRAYS em JS é um Objeto chamado ARRAY
 * para criar um array basta usar [] ou new Array()
 */

//Cria um array de modelos de carros
const carros = ['gol', 'focus', 'celta'];
const frutas = new Array('maça', 'banana', 'laranja');


export default function exemploArraysFun(){


//mostra o array no console
console.log(carros);
//mostra o array numa tabela no console
console.table(frutas);

//MÉTODO PUSH: Adiciona um elemento ao array
//sempre na última posição
frutas.push('limão');
console.log('Adicionamos o limão:');
console.table(frutas);

//MÉTODO POP: Remove da última posição
carros.pop();
console.log('Removemos o celta:');
console.table(carros);
//PESQUISE OS MÉTODOS SHIFT E UNSHIFT

//MÉTODO SPLICE
/**
 * SPLICE(POSICAO,QTD_RREMOVIDOS,ELEMENTOS[ELEMENTO1,ELEMENTO2 ....])
 *  - POSICAO: POSICAO A SER ALTERADA
 * -  QTD_RREMOVIDOS: QUANTIDADE DE ELEMENTOS REMOVIDOS
 * - ELEMENTOS, LISTA DE NOVOS ELEMENTOS SEPARADOS POR VIRGULA
 */

//ADICIONAR UMA BERGAMOTA NA POSICAO 2 ANTES DE laranja
frutas.splice(2, 1, 'BERGAMOTA', 'MEXERICA');
console.log('Adicionando a BERGAMOTA');
console.table(frutas);

//MOSTRAR BERGAMOTA
console.log(`NOVA FRUTA É ${frutas[2]}`);

}
