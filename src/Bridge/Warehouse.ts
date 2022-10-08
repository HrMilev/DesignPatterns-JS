import { Packageable } from "./Packageable.js";
import { IStorage } from "./IStorage";

export class Warehouse implements IStorage {
    constructor(private height: number) {
        
    }

    Store(pack: Packageable): void {
        console.log(`I am warehouse storage facility with height ${this.height}`);
        pack.PrepareForStorage();
        console.log("I am happy to store this junk");
    }
}

//Concrete implementation of implementor