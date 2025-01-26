import { Calculator } from "./Caculator"

describe("String number calculator", () => {
    let calc: Calculator = new Calculator();

    it("test if passing empty string to function", () => {
        expect(calc.stringAdd("")).toBe(0);
    })

    it("test if passing only one number in string to function", () => {
        expect(calc.stringAdd("1")).toBe(1);
    })

    it("test if passing two numbers in string to function", () => {
        expect(calc.stringAdd("5, 6")).toBe(11);
    })

    it("test if passing multiple numbers in string to function", () => {
        expect(calc.stringAdd("2, 4, 3, 7, 8")).toBe(24);
    })

    it("test if passing numbers with new line as delimeter in string to function", () => {
        expect(calc.stringAdd("2\n4,5\n6")).toBe(17);
    })

    it("test if passing numbers with custom delimeter in string to function", () => {
        expect(calc.stringAdd("//;\n2;4;5")).toBe(11);
    })
    
})