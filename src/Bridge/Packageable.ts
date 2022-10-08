import { IStorage } from "./IStorage";

export abstract class Packageable {
    constructor(protected storage : IStorage) {

    }
    abstract Deliver(text: string) : void
    abstract PrepareForStorage() : void
}

//This abstract class should be used as abstraction (Objects that are going to use the implementors)