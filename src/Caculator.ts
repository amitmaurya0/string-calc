export class Calculator {
    stringAdd(numberString: string): number {
        if(!numberString.trim())
        return 0;

        const nums = numberString.split(",");

        const numbers = nums.map((item) => parseInt(item));
        
        return numbers.reduce((sum, num) => sum + num, 0)
    }
}