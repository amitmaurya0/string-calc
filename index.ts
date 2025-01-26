import { Calculator } from "./src/Caculator";

const calculator = new Calculator();
try {
    
    console.log(calculator.stringAdd("2,5"))
    console.log(calculator.stringAdd("//;\n2;4;5"))
    console.log(calculator.stringAdd("2,10,1001"))
    console.log(calculator.stringAdd("2,5,-5"))
} catch (error) {
    if (error instanceof Error) {
        console.log('Error: ', error.message);
    } else {
        console.log('Unexpected error: ', error);
    }
}