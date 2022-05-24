import { MessageDecorator } from "./MessageDecorator.js";

export class EncriptedMessageDecorator extends MessageDecorator {
    send(text: string): void {
        console.log("Encript the secret message ...");

        this.message.send(text.split("").reverse().join(""));
    }
}

//This is implemenation of concrete decorator.