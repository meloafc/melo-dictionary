export class User {
    email: string;
    emailVerified: boolean;
    displayName: string;
    photoURL: string;
    createdAt: number;

    constructor(object: any) {
        if(object.email) {
            this.email = object.email;
        }

        if(object.emailVerified) {
            this.emailVerified = object.emailVerified;
        }

        if(object.displayName) {
            this.displayName = object.displayName;
        }

        if(object.photoURL) {
            this.photoURL = object.photoURL;
        }
    }
}
