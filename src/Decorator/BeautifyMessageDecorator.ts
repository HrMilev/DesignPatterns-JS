import { MessageDecorator } from "./MessageDecorator.js";

export class BeautifyMessageDecorator extends MessageDecorator {
    send(text: string): void {
        console.log("Beautify the message ...");

        this.message.send("*** " + text + " ***");
    }
}

//This is implemenation of concrete decorator.