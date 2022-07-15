import Factory from "./Factory.js"
import IMobilePhone from "./IMobilePhone.js"

export function factoryMethod(type: number, name: string) {
    let phone: IMobilePhone = new Factory().getPhone(type as PhoneType, name);

    phone.getVersion();
}