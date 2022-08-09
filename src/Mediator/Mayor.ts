import IMediator from "./IMediator.js";
import IRobber from "./IRobber.js";

export class Mayor implements IRobber {
    constructor(private _mediator: IMediator) {
        this._mediator.setRobber(this, this.tookTheBooty);
    }
    get corruptionIndex(): number {
        return 1; 
    }

    legallySteal(amount: number): void {
        this._mediator.split(amount);
    }

    private tookTheBooty(amount: number){
        console.log(`I am poor mayor ... with lower % of steal ... Arrrrr! ... I have managed to steal only ${amount}$`)
    }
}


//This is one of the implementations that needs to be mediated.