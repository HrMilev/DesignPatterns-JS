import { IVault } from "./IVault.js";
import { Vault } from "./Vault.js";

export class DefenseVault implements IVault {
    private map = new Map();
    private vault = new Vault();

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
//Proxy can create real service by itself, no need to pass it. (Composition is done at compile time) 
//Client doesn't know about the relationship between Proxy and real service.