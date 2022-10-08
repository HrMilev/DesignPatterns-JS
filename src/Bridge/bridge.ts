import { Backyard } from "./Backyard.js";
import { FragilePackage } from "./FragilePackage.js";
import { Package } from "./Package.js";
import { Warehouse } from "./Warehouse.js";

export function bridge(place: string) {
    let storage = new Backyard();
    let pack = new Package(storage);
    pack.Deliver(place);

    pack = new FragilePackage(storage);
    pack.Deliver(place);

    storage = new Warehouse(5);
    pack = new Package(storage);
    pack.Deliver(place);

    pack = new FragilePackage(storage);
    pack.Deliver(place);
}