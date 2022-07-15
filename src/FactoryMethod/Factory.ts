import { CheapPhone } from "./CheapPhone.js";
import { ExpensivePhone } from "./ExpensivePhone.js";
import IMobilePhone from "./IMobilePhone.js";

export default class Factory {
    getPhone(type: PhoneType, ownerName: string): IMobilePhone {
        switch (type) {
            case PhoneType.Cheap:
                return new CheapPhone();
            case PhoneType.Expensive:
                return new ExpensivePhone(ownerName);
            default:
                throw new Error("Missing implementation or declaration")
        }
    }
}

//This is the actual creator. 