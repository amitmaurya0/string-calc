import { Calculator } from "./Caculator"

describe("String number calculator", () => {
    let calc: Calculator = new Calculator();

    it("test if passing empty string to function", () => {
        expect(calc.stringAdd("")).toBe(0);
    })

    it("test if passing only one number in string to function", () => {
        expect(calc.stringAdd("1")).toBe(1);
    })

    it("test if passing two number in string to function", () => {
        expect(calc.stringAdd("5, 6")).toBe(11);
    })

    it("test if passing multiple number in string to function", () => {
        expect(calc.stringAdd("2, 4, 3, 7, 8")).toBe(24);
    })
    
})