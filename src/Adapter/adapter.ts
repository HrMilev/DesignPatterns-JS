import { IFormetter } from "./IFormatter";
import { SpaceFormatterNew } from "./SpaceFormatterNew.js";
import { SpaceFormatterNewAdapter } from "./SpaceFormatterNewAdapter.js";
import { SpaceFormatterOld } from "./SpaceFormatterOld.js";
import { SpaceFormatterOldAdapter } from "./SpaceFormatterOldAdapter.js";

export function adapter() {
    let text : string = "text";
    //Image this is the usage of the old library
    let formatter : IFormetter = new SpaceFormatterOldAdapter(new SpaceFormatterOld());
    formatter.format(text);

    console.log("--- REPLACE OLD WITH NEW ---")
    //Image this is the replacement of the old library with the new one (only one line needs to be change)
    formatter = new SpaceFormatterNewAdapter(new SpaceFormatterNew());
    formatter.format(text);
}