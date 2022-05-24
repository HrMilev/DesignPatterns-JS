import { BeautifyMessageDecorator } from "./BeautifyMessageDecorator.js";
import { EncriptedMessageDecorator } from "./EncriptedMessageDecorator.js";
import { Message } from "./Message.js";
import { IMessage } from "./IMessage.js";

export function decorator(from: string, text: string, instructions: string[]) {
    let message : IMessage = new Message(from);
    message.send(text);

    instructions.forEach(instruction => {
        if(instruction == "E") {
            message = new EncriptedMessageDecorator(message);
            message.send(text);
        }

        if(instruction == "B") {
            message = new BeautifyMessageDecorator(message);
            message.send(text);
        }
    });
}

//Some example setup
// Difference between decorator and proxy is:
// - proxy can be instantiate without the need of main service. 
// The relationship between main service and proxy remains hidden from the client
// and it is been set up at compile time.
// - decorator needs an instance of the main service in order to be instantiate.
// The relationship between main service and decorator is visible for the client
// and can be dynamically set up.