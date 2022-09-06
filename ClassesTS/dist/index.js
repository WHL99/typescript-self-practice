"use strict";
class Player {
    //private only exists in TS
    constructor(firstName, lastNmame) {
        this.score = 0; //public -> coupld access outside and inside of the class. JS doen't have it.
        this.firstName = firstName;
        this.lastNmame = lastNmame;
    }
}
const player1 = new Player('Elton', 'Stil');
console.log(player1);
//Parameter Properties Shorthan -> short cut 
//TS全部寫在(); JS寫在()和{}
class Person {
    constructor(first, last, _score = 10) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("The new score is negtive!");
        }
        this._score = newScore;
    }
}
class Superman extends Person {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 99999;
    }
}
const person1 = new Person('Davis', 'Ki');
const Superman1 = new Superman('SuperDavis', 'Ki');
console.log(person1.fullName);
person1.score = 199; // person1.score(199)   <- ❌
console.log(person1.score);
class Computer {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    print() {
        console.log(`${this.brand}`);
    }
}
const computer1 = new Computer('white', 'Apple');
console.log(computer1);
//Creating Abstract Classes 
// abstract only exists in TS
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return `${this.first}` + `'s salary is ` + `${this.salary}`;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, salaryPerHour, workHour) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salaryPerHour = salaryPerHour;
        this.workHour = workHour;
    }
    getPay() {
        return `${this.first}` + `'s salary is ` + `${this.salaryPerHour * this.workHour}`;
    }
}
const fullTimeStaff1 = new FullTimeEmployee('Kevin', 'Buija', 2000);
console.log(fullTimeStaff1.getPay());
const partTimeStaff1 = new PartTimeEmployee('Bob', 'Wjila', 12, 100);
console.log(partTimeStaff1.getPay());
