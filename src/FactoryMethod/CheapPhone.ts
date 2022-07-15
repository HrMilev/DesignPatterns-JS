import IMobilePhone from "./IMobilePhone.js";

export class CheapPhone implements IMobilePhone {
    constructor() {   
    }

    getVersion(): void {
        console.log(`I am really cheap chinese phone. I don't even know who my owner is ... `)
    }
}


//This is one of the implementations that needs to be created run time.