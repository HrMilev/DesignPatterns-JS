import { Packageable } from "./Packageable"

export interface IStorage {
    Store(pack: Packageable) : void
}

//This interface is used as a implementor interface (some implementation that varies across different types)