import IMediator from "./IMediator.js";
import IRobber from "./IRobber.js";

export class Politician implements IRobber {
    constructor(private _mediator: IMediator) {
        this._mediator.setRobber(this, this.tookTheBooty);
    }
    get corruptionIndex(): number {
        return 4; 
    }

    legallySteal(amount: number): void {
        this._mediator.split(amount);
    }

    private tookTheBooty(amount: number){
        console.log(`I am hungry politic ... hungry for people's money ... Arrrrr! ... I have managed to steal only ${amount}$`)
    }
}


//This is one of the implementations that needs to be mediated.