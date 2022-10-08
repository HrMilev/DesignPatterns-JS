import { IStorage } from "./IStorage";
import { Packageable } from "./Packageable.js";

export class Package extends Packageable {
    constructor(storage : IStorage) {
        super(storage);
    }

    Deliver(text: string): void {
        console.log(`Delivering to ... ${text}`);
        this.storage.Store(this);
    }

    PrepareForStorage(): void {
        console.log("Unboxing the box ...")
    }
}