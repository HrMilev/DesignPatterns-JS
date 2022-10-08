import { Single } from "./Single.js";

export function singleton() {
    let s1 = Single.getMe();
    s1.compareMe(Single.getMe());
}