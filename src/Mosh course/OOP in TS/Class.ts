 // Object-oriented programming is all about Object
 // To create an objects, we have to create first class
 // A class is a blueprint for creating object, it's kind of an 
 // object factory

 class Account {
    id: number;
    owner : string;
    balance: number;
    // we have to create a constractor to solve the the compilation
    //errors " property has no initializer and is not defetely in the constructor"

    // A constructor is a special function or a special method inside a class for initializing an object

    constructor(id : number, owner: string, balance: number){
        this.id=id;
        this.owner=owner;
        this.balance=balance;
    }
    deposit(amount : number): void{
        if (amount <=0)
            throw new Error ("Invalid amount")
        this.balance += amount;
    }
 }