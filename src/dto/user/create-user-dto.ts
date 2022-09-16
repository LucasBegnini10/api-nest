export class CreateUserDto{
    email: string;
    password: string;
    name: string

    constructor(name: string, email: string, password: string){
        this.email = email, 
        this.name = name; 
        this.password = password
    }

    get getEmail(){
        return this.email;
    }

    get getName(){
        return this.name;
    }

    get getPassword(){
        return this.password;
    }

    set setEmail(email: string){
        this.email =  email;
    }

    set setName(name: string){
        this.name = name;
    }

    set setPassword(password: string){
        this.password = password;
    }
}