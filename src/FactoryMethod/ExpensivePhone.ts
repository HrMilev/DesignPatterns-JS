import IMobilePhone from "./IMobilePhone.js";

export class ExpensivePhone implements IMobilePhone {
    constructor(private ownerName: string) {   
    }

    getVersion(): void {
        console.log(`I am really expensive iPhone and my owner is ${this.ownerName}`)
    }
}


//This is one of the implementations that needs to be created run time.