export class Calculator {
    stringAdd(numberString: string): number {
        if(!numberString.trim())
        return 0;
        
        return parseInt(numberString)
    }
}