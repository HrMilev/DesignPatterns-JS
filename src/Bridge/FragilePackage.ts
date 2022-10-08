import { IStorage } from "./IStorage";
import { Packageable } from "./Packageable.js";

export class FragilePackage extends Packageable {
    constructor(storage : IStorage) {
        super(storage);
    }

    Deliver(text: string): void {
        console.log(`Carefully delivering fragile pack to ... ${text}`);
        this.storage.Store(this);
    }

    PrepareForStorage(): void {
        console.log("Boxing the box ...")
    }
}