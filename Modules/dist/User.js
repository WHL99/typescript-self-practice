export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logs out!`);
    }
}
export class Admin {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    deleteFile() {
        console.log(`Admin ${this.username} deletes file!`);
    }
}
