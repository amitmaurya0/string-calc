import { Calculator } from "./Caculator"

describe("String number calculator", () => {
    let calc: Calculator = new Calculator();

    it("test if passing empty string to function", () => {
        expect(calc.stringAdd("")).toBe(0);
    })

    
})