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

        const negativeNumbers = numbers.filter((item) => item < 0);

        if(negativeNumbers.length > 0) {
            throw new Error("negative numbers not allowed: "+negativeNumbers.join(", "))
        }
        
        const finalNumbers = numbers.filter((item) => item <= 1000)
        return finalNumbers.reduce((sum, num) => sum + num, 0)
    }
}