import { IMessage } from "./IMessage.js";

export class Message implements IMessage {
    constructor(private from: string){}

    send(text: string): void {
        console.log(text + " from " + this.from);
    }
}

//This is the concrete implemetation of the main service class