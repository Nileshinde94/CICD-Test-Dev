export class Login {
    username: string;
    password: string;
    loginTime: Date;


    constructor(username: string, password: string) {
        this.username = "Nilesh";
        this.password = "12345";
        this.loginTime = new Date();
    }
}