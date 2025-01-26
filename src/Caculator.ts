export class Calculator {
    stringAdd(numberString: string): number {
        if(!numberString.trim())
        return 0;

        let seprator = /,|\n/;

        if(numberString.startsWith("//")){
            const parts = numberString.split("\n");
            seprator = new RegExp(parts[0].slice(2));
            numberString = parts[1];
        }

        const nums = numberString.split(seprator);
        
        const numbers = nums.map((item) => parseInt(item));
        
        return numbers.reduce((sum, num) => sum + num, 0)
    }
}