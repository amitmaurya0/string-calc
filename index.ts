import { Calculator } from "./src/Caculator";

const calculator = new Calculator();

console.log(calculator.stringAdd("2,5"))
console.log(calculator.stringAdd("//;\n2;4;5"))