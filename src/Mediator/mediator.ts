import IMediator from "./IMediator.js";
import IRobber from "./IRobber.js";
import { Mayor } from "./Mayor.js";
import { MediatorTheft } from "./MediatorTheft.js";
import { Politician } from "./Politician.js";

export function mediator(): void {
    let mediator: IMediator = new MediatorTheft();
    let m: IRobber = new Mayor(mediator);
    let p: IRobber = new Politician(mediator);

    p.legallySteal(4000);
    m.legallySteal(1010);
}