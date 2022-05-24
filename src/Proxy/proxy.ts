import { Vault } from "./Vault.js";
import { DefenseVault } from "./DefenseVault.js";

export async function proxy(name: string){
    let vault = new Vault();
    console.log(vault.showMeTheMoney(name));

    let defenseVault = new DefenseVault(vault);
    console.log(defenseVault.showMeTheMoney(name));
    await new Promise(r => setTimeout(r, 3000));
    console.log(defenseVault.showMeTheMoney(name));
}

//Some example setup