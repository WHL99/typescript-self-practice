"use strict";
class Player {
    static description = 'Player In The Game'

    static defaultPlayer(){
        return new Player('Randy','Sam')
    }
    //static only for class itself


    #score = 0
    //private field

    numLives = 10
    constructor(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    getScore(newScore){
        this.#score = newScore
    }
    get score(){
        return this.#score
    }
    set score(newScore){
        if (newScore < 0){
            throw new Error("The score is less than 0");
        }
        this.#score = newScore
        // return theNewScore
    }
   
    loseLife() {
        this.numLives -= 1
    }
    showScore(){
        return this.#score
    }
}

class AdminPlayer extends Player{
    constructor(firstName,lastName,powers){
        super(firstName,lastName)
        this.powers = powers
    }
    isAdmin = true
} 

const player1 = new Player('Alice', 'Mueller')

console.log(player1)

// player1.fullName()  <--- x
console.log(player1.fullName)

//直接用get
console.log(player1.score)
// console.log(player1.getScore(3))

// this.newScore = 199
player1.newScore = 199
console.log('The New Score: ',player1.score)

const adminPlayer1 = new AdminPlayer('David','Unknown',['eat','cook'])

console.log(adminPlayer1)

