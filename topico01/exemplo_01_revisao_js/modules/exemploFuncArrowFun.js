export default function pot(num, exp) {
  return num ** exp;
}

export const pow = (num, exp) => {
  return num ** exp;
};

export const pow2 = (num) => num ** 2;



//OPERADOR THIS
function Person() {
  // O contrutor Person() define `this` como uma instância dele mesmo.
  this.age = 0;

  setInterval(function growUp() { //Interval loop
    // Em modo não estrito, a função growUp() define `this`
    // como o objeto global (porque é onde growUp() é executado.),
    // que é diferente ao `this`
    // definido pelo construtor Person().
    this.age++;
  }, 1000);
}

//CORRECAO ES5
function Person2() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // A chamada a função refere à variáevel `that` da qual
    // o valor é o objeto esperado.
    that.age++;
  }, 1000);
}

function Person3() {
  this.age = 0;

  setInterval(() =>{
    this.age++;
  }, 1000);
}

export {Person,Person2,Person3}