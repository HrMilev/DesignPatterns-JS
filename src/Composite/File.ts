import { IFileComponent } from "./IFileComponent";

export class File implements IFileComponent {
    private indentation: string = '--'

    constructor(private name: string) {}

    read(indentation: string): void {
        console.log(indentation + this.indentation + this.name);
    }

}