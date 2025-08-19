 const exemplosLet = () => {

    let pi = 3.14;
    //var pi = 3 //Descomente para ver o erro
    pi = 0.14; // Erro de redeclaração da variável pi
    console.log(pi);

    //escopo de bloco
    if (true) {
        let pi = 3.1415;
        //imprime o valor de pi do bloco
        console.log(pi);
        if (true) {
            let pi = 4;
            console.log(pi);
        }
    }
    //imprime o valor de pi do inicio do programa
    console.log(pi);

    //uso comum para let iteradores
    for (let c of 'abcde') {
        console.log(c);
    }
    //tabuada do 5
    const n = 5;
    for (let i = 1; i <= 10; i++) console.log(`${i}X${n}=${i * n}`);

    //observe que i não é mais acessível fora do FOR
    //console.log(i)//Descomente para ver o erro

}
 const exemplosConst = () => {
    const pi = 3.14;
    //pi = 3.14; //Não é possível atribuir novos valores

    //Mas é possível alterar conteúdo de um Array
    const frutas = ['maça', 'limão', 'uva'];

    frutas.push('laranja'); //não gera erro
    frutas.shift();
    console.log(frutas.pop());
    // frutas = ['bergamota'];
    console.table(frutas);

    //Também é possível alterar atributos de um Objeto
    const carro = { marca: 'VW', cor: 'Preto', modelo: 'Gol GVII' };
    carro.modelo = 'Polo';
    console.table({ carro });
    // carro = 'asdasf';

}


export {exemplosConst,exemplosLet}