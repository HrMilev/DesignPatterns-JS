import { IVault } from "./IVault.js";

export class Vault implements IVault {
    showMeTheMoney(name: string): string {
        return `Inflation has eaten your money, ${name}: ${new Date()}`;
    }
}

//This is the the real service class, which should perform some work