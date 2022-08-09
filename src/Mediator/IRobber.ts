import IMediator from "./IMediator"

export default interface IRobber {
    legallySteal(amount: number) : void
    readonly corruptionIndex: number
}

//This is some interface. It can be used be objects, which needs a mediation.