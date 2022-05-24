import { IMessage } from "./IMessage.js";

export abstract class MessageDecorator implements IMessage {
    constructor(protected message: IMessage){}

    abstract send(text: string): void;
}

//This is base class for all the decorators, which implements the main interface