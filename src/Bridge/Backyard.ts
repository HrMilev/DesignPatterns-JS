import { Packageable } from "./Packageable.js";
import { IStorage } from "./IStorage";

export class Backyard implements IStorage {
    Store(pack: Packageable): void {
        console.log("I am backyard and I have lots of free space.");
        pack.PrepareForStorage();
        console.log("I love to be your storage host.")
    }

}