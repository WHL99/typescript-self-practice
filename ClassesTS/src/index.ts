class Player {

    //要加以下這個
    public readonly firstName: string;
    public readonly lastNmame:string;    //readonly only in TS, JS doen't have it.
    private  score: number = 0;     //public -> coupld access outside and inside of the class. JS doen't have it.
    //private only exists in TS

    constructor(firstName: string,lastNmame: string){
       this.firstName = firstName
       this.lastNmame = lastNmame
    }
}

const player1 = new Player('Elton','Stil')
console.log(player1)


//Parameter Properties Shorthan -> short cut 
//TS全部寫在(); JS寫在()和{}
class Person{
    constructor(
        public first:string, 
        public last:string,
        protected  _score: number = 10
        ){
    }
    get fullName():string{
        return `${this.first} ${this.last}`
    }
    get score():number{
        return this._score
    }
    set score(newScore:number){
        if(newScore < 0){
            throw new Error("The new score is negtive!")
        }
        this._score = newScore
    }
}

class Superman extends Person{
    public isAdmin:boolean = true
    maxScore(){
     this._score = 99999
    }
}

const person1 = new Person('Davis','Ki')
const Superman1 = new Superman('SuperDavis','Ki')


console.log(person1.fullName)
person1.score = 199      // person1.score(199)   <- ❌


console.log(person1.score)


//Classes and Interfaces
interface Colorful {
    color:string
}

interface Printable {
    print():void
}

class Computer implements Colorful, Printable {
    constructor(public color:string, public brand:string){}

    print(){
        console.log(`${this.brand}`)
     }
}

const computer1 = new Computer('white','Apple')

console.log(computer1)


//Creating Abstract Classes 
// abstract only exists in TS

abstract class Employee{
    constructor(public first:string, public last:string){}
    abstract getPay():string
    greet(){
        console.log("Hello!")
    }
}

class FullTimeEmployee extends Employee{
    constructor(
        public first:string, 
        public last:string, 
        private salary:number
        ){
        super(first,last)
    }
    getPay():string{
        return `${this.first}`+`'s salary is `+`${this.salary}`
    }
}

class PartTimeEmployee extends Employee{
    constructor(
        public first:string, 
        public last:string, 
        private salaryPerHour:number, 
        public workHour:number
        ){
        super(first,last)
    }
    getPay():string{
        return `${this.first}`+`'s salary is `+`${this.salaryPerHour * this.workHour}`
    }
}

const fullTimeStaff1 = new FullTimeEmployee('Kevin','Buija',2000)
console.log(fullTimeStaff1.getPay())

const partTimeStaff1 = new PartTimeEmployee('Bob','Wjila',12,100)
console.log(partTimeStaff1.getPay())


  
