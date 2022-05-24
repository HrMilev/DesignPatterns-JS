import { Vault } from "./Vault.js";
import { DefenseVault } from "./DefenseVault.js";

export async function proxy(name: string){
    let vault = new Vault();
    console.log(vault.showMeTheMoney(name));

    let defenseVault = new DefenseVault();
    console.log(defenseVault.showMeTheMoney(name));
    await new Promise(r => setTimeout(r, 3000));
    console.log(defenseVault.showMeTheMoney(name));
}

//Some example setup
// Difference between decorator and proxy is:
// - proxy can be instantiate without the need of main service. 
// The relationship between main service and proxy remains hidden from the client
// and it is been set up at compile time.
// - decorator needs an instance of the main service in order to be instantiate.
// The relationship between main service and decorator is visible for the client
// and can be dynamically set up.