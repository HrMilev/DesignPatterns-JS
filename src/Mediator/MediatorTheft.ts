import IMediator from "./IMediator.js";
import IRobber from "./IRobber.js";

export class MediatorTheft implements IMediator {
    private _robbers: {rob: IRobber, split: (amount: number) => void}[] = [];

    setRobber(rob: IRobber, internalSplit: (amount: number) => void): void {
        this._robbers.push({rob, split: internalSplit});
    }
    split(amount: number): void {
        let pieceOfTheMoney = amount / this._robbers.reduce((s, r) => s + r.rob.corruptionIndex, 0);
        this._robbers.forEach(r => {
            r.split(pieceOfTheMoney * r.rob.corruptionIndex);
        });
    }
}


//This is the real mediator.