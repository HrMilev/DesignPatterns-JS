import { IFileComponent } from "./IFileComponent.js";

export class Folder implements IFileComponent {
    private indentation: string = '--'

    constructor(private name: string, private nodes: IFileComponent[]){}

    add(node: IFileComponent){
        this.nodes.push(node);
    }

    read(indentation: string = this.indentation): void {
        console.log(indentation + this.indentation + this.name + ": folder")

        this.nodes.forEach(x => {
            x.read(indentation + this.indentation)
        })
    }
}