import { IFormetter } from "./IFormatter";
import { SpaceFormatterNew } from "./SpaceFormatterNew";

export class SpaceFormatterNewAdapter implements IFormetter {
    constructor(private adaptee: SpaceFormatterNew) {   
    }

    format(text: string): void {
        console.log("use new formatter: ");
        console.log(this.adaptee.newFormat(text));
    }
}


//This is the new class needed to plug the new external resource