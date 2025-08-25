import { exemplosConst, exemplosLet } from "./modules/letConstExemplos.js"
import numTypesExamples from "./modules/numTypes.js"


console.log("Exemplo 01 - TIPOS EM ECMASCRIPT")
exemplosConst();
numTypesExamples();

console.log("Exemplo 02 - STRINGS EM ECMASCRIPT")

const curso = "Desenvolvimento Frontend II"
console.log(` Disciplina de ${curso}`);


console.log("Exemplo 03 - LET E CONST EM ECMASCRIPT");

exemplosLet();
exemplosConst();
