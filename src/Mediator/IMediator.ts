import IRobber from "./IRobber.js";

export default interface IMediator {
    setRobber(rob: IRobber, internalSplit: (amount: number) => void) : void
    split(amount: number): void
}

//This is the mediator interface, which sets the mediated objects