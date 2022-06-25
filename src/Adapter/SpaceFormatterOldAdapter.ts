import { IFormetter } from "./IFormatter";
import { SpaceFormatterOld } from "./SpaceFormatterOld";

export class SpaceFormatterOldAdapter implements IFormetter {
    constructor(private adaptee: SpaceFormatterOld) {   
    }

    format(text: string): void {
        console.log("use old formatter: ");
        console.log(this.adaptee.oldFormat(text));
    }
}

//This is the old class needed to plug the old external resource