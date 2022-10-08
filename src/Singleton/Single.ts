import { ISigleton } from "./ISingleton";

export class Single implements ISigleton {
    private static me : ISigleton

    private constructor() {
        
    }

    static getMe() : ISigleton {
        if (this.me == null) {
            this.me = new Single();
        }

        return this.me;
    }

    compareMe(maybeMe : ISigleton) : void {
        console.log("Am I one of a kind ?")
        console.log(this === maybeMe);
    }
}