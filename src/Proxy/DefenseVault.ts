import { IVault } from "./IVault.js";

export class DefenseVault implements IVault {
    private map = new Map();

    constructor (private vault: IVault) {}

    showMeTheMoney(name: string): string {
        if(name === 'John') {
            throw new Error('No money for John');
        }

        if(!this.map.has(name)) {
            this.map.set(name, this.vault.showMeTheMoney(name));
        }

        return this.map.get(name);
    } 
}

//This is the proxy class, which should perform some additional work,
//(could be a protector and cache of the real service class)